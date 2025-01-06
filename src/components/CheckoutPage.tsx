"use client";

import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  CardElement
} from "@stripe/react-stripe-js";
import { convertToSubcurrency } from "@/lib/utils";
import { confirmPayment, stripePaymentIntent } from "@/api/stripe";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { createOrder } from "@/api/orders";
import { emptyCart } from "@/redux/cart";

const CheckoutPage = ({ amount ,checkoutId,shippingAmount,closeModal}: { amount: number ,checkoutId:number,shippingAmount:any,closeModal:any}) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const cart = useSelector((state:RootState) => state.centeralizedStateData.cart)
  const user = useSelector((state:RootState) => state.centeralizedStateData.user)

  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [intentId, setIntentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [orderId,setOrderId] = React.useState<any>(null)
  const [shippingDetails,setShippingDetails] = React.useState<any>({})

  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data,"data")
        setClientSecret(data.client_secret)
        setIntentId(data.id)
    });
    //    stripePaymentIntent({ 
    //           amount: convertToSubcurrency(amount),
    //           currency: 'usd',
    //           payment_method_types: ['card'],
    //           }).then((res)=>{
    //             setClientSecret(res.clientSecret)
    //           })
    //           .catch((err)=>{
    //             console.log(err)
    //           })


  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
    //   setLoading(false);
      return;
    }
    const cardElement = elements.getElement(CardElement)
    console.log(cardElement,"cardElement")
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect:"if_required",
      confirmParams: {
        payment_method:"card",
        // payment_methods: ['card'],
        // return_url: ``,
        return_url: `http://www.localhost:3000/thank-you?amount=${amount}&status=success&checkoutId=${checkoutId}&intentId=${intentId}&shippingAmount=${shippingAmount}`,
      },
    });
    

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
        console.log("payment success")
          confirmPayment({
                amount:amount,
                checkout_id:checkoutId,
                payment_intent_id:intentId})
              .then(res=>{
                console.log(res,"suscessfull")
                // reload = true
                if(res.status === 200){
                  const arr:any=[]
                  cart.items.forEach((item:any)=>{
                    arr.push({
                      product_id:item.product.id,
                      quantity:item.quantity,
                      price:parseInt(item.product.price),
                      special_attributes:""
                    })
                  })
                  const obj={
                    order_number: `#${res.data.transaction.checkout.id}`,
                    sub_total: parseInt(res.data.transaction.checkout.sub_total),
                    vat:parseInt(res.data.transaction.checkout.vat_amount),
                    shipping_amount: parseInt(shippingAmount!),
                    discounted_amount:parseInt( res.data.transaction.checkout.discount_amount),
                    total_amount: parseInt(res.data.transaction.checkout.grand_total),
                    paid_amount:parseInt(res.data.transaction.amount_paid),
                    is_amount_fully_paid: 1,
                    is_wallet_used: 0,
                    remaining_amount: 0,
                    wallet_amount_used: 0,
                    shipping_type_id:res.data.transaction.checkout.shipping_id,
                    // wallet_request_id: 1,
                    coupon_id: null,
                    coupon_percentage: null,
                    order_products: arr
                  }
                  setShippingDetails(res.data.transaction.checkout)
                  createOrder(obj,user.token).then(
                    response=>{
                      if(response.order){
                        // setOrderId(res.order.id)
                        closeModal()
                        dispatch(emptyCart())
                        setLoading(false);

                        router.replace(`/thank-you?order=${response.order.id}&shippingAddress=${res.data.transaction.checkout.shipping_address}&shippingContact=${res.data.transaction.checkout.shipping_contactnumber}`)
                        // setOrderData(res.order)
                      }
                    }
                  )
                  .catch(err=>console.log(err))
                }
              })
              .catch(err=>console.log(err))
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }

    //
    // if(cardElement){
        
    //     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: cardElement,
    //         },
    //         // redirect: 'if_required', // Prevent automatic redirection
    //     });
    //     console.log(error,paymentIntent,"res confirm")
    //     if (error) {
    //         console.error('Payment error:', error.message);
    //       } else if (paymentIntent) {
    //         if (paymentIntent.status === 'succeeded') {
    //           console.log('Payment succeeded!');
    //           // Redirect manually to a success page or perform other actions
    //           router.push('/thank-you'); // Replace with your success route
    //         } else {
    //           console.log('Payment status:', paymentIntent.status);
    //           // Handle other statuses or errors as needed
    //         }
    //       }
    // }

  };
  console.log(clientSecret ,stripe ,elements , "abcddd")

  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {clientSecret && (<PaymentElement />)}

      {errorMessage && <div>{errorMessage}</div>}

      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

export default CheckoutPage;