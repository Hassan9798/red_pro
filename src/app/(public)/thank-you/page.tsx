'use client'
import React, { useEffect } from "react";
import { Metadata } from "next";
import { confirmPayment } from "@/api/stripe";

import { createOrder, getOrder } from "@/api/orders";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import moment from "moment"
import { useSearchParams } from "next/navigation";
 const metadata: Metadata = {
  title: "Thank You",
};

const ThankYouPage = () => {
  // const router = useRouter()
  const cart = useSelector((state:RootState) => state.centeralizedStateData.cart)
  const user = useSelector((state:RootState) => state.centeralizedStateData.user)

  const searchParams = useSearchParams()
  // const {abcd} = router
  // const urlParams = new URLSearchParams(window.location.search);
  // const status = urlParams.get('status');
  // const amount = urlParams.get('amount');
  // const checkoutId = urlParams.get('checkoutId');
  // const intentId = urlParams.get('intentId');
  // const shippingAmount = urlParams.get('shippingAmount');
  const order = searchParams.get('order');
  const shippingAddress = searchParams.get('shippingAddress');
  const shippingContact = searchParams.get('shippingContact');

  
  const [orderData,setOrderData] = React.useState<any>({})
  const [orderId,setOrderId] = React.useState<any>(order)
  const [shippingDetails,setShippingDetails] = React.useState<any>({})
  let reload = false
  // useEffect(()=>{
  //   if(status === "success" && !reload){ 
  //     confirmPayment({
  //       amount:parseInt(amount!),
  //       checkout_id:checkoutId,
  //       payment_intent_id:intentId})
  //     .then(res=>{
  //       console.log(res,"suscessfull")
  //       reload = true
  //       if(res.status === 200){
  //         const arr:any=[]
  //         cart.items.forEach((item:any)=>{
  //           arr.push({
  //             product_id:item.product.id,
  //             quantity:item.quantity,
  //             price:parseInt(item.product.price),
  //             special_attributes:""
  //           })
  //         })
  //         const obj={
  //           order_number: `#${res.data.transaction.checkout.id}`,
  //           sub_total: parseInt(res.data.transaction.checkout.sub_total),
  //           vat:parseInt(res.data.transaction.checkout.vat_amount),
  //           shipping_amount: parseInt(shippingAmount!),
  //           discounted_amount:parseInt( res.data.transaction.checkout.discount_amount),
  //           total_amount: parseInt(res.data.transaction.checkout.grand_total),
  //           paid_amount:parseInt(res.data.transaction.amount_paid),
  //           is_amount_fully_paid: 1,
  //           is_wallet_used: 0,
  //           remaining_amount: 0,
  //           wallet_amount_used: 0,
  //           shipping_type_id:res.data.transaction.checkout.shipping_id,
  //           // wallet_request_id: 1,
  //           coupon_id: null,
  //           coupon_percentage: null,
  //           order_products: arr
  //         }
  //         setShippingDetails(res.data.transaction.checkout)
  //         createOrder(obj,user.token).then(
  //           res=>{
  //             if(res.order){
  //               setOrderId(res.order.id)
  //               // setOrderData(res.order)
  //             }
  //           }
  //         )
  //         .catch(err=>console.log(err))
  //       }
  //     })
  //     .catch(err=>console.log(err))
  //   }
  // },[status])
  useEffect(()=>{
    console.log("id effect",order)
  setOrderId(order)
  },[order])

  useEffect(()=>{
    console.log("data effect")

    getOrder(orderId,user.token).then(
      res=>
        setOrderData(res.order)
      
    )
    .catch(err=>console.log(err))
  },[orderId])

  console.log(orderId,"orderId")
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg w-full flex flex-col lg:flex-row lg:items-center gap-8">
        {/* greetings */}
        <div className="flex flex-col gap-6 w-full lg:basis-1/2 order-2 lg:order-none">
          <div className="flex flex-col gap-4">
            <h1 className="font-medium text-3xl lg:text-4xl">
              Thank You For Your Purchase!
            </h1>
            <p className="text-[#474747] text-sm">
              Your Order will be processed within 24 hours during working days.
              We will notify you by email once your order has been shipped.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium">Billing Address</h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center gap-6 lg:max-w-96 w-full text-sm">
                <div className="font-medium">Name</div>
                <div className="text-[#474747]">{user?.user!.username}</div>
              </div>
              <div className="flex justify-between items-center gap-6 lg:max-w-96 w-full text-sm">
                <div className="font-medium">Address</div>
                <div className="text-[#474747]">
                  {shippingAddress}
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 lg:max-w-96 w-full text-sm">
                <div className="font-medium">Phone</div>
                <div className="text-[#474747]">{shippingContact}</div>
              </div>
              <div className="flex justify-between items-center gap-6 lg:max-w-96 w-full text-sm">
                <div className="font-medium">Email</div>
                <div className="text-[#474747]">{user?.user!.email}</div>
              </div>
            </div>
          </div>
        </div>
        {/* receipt */}
        <div className="flex flex-col w-full lg:basis-1/2 order-1 lg:order-none bg-[#F4F4F4] rounded-3xl">
          <h2 className="font-semibold text-xl sm:text-2xl lg:px-8 lg:py-10 px-4 py-6">
            Order Summary
          </h2>
          <div className="border-t border-[#A0A0A0]" />
          <div className="lg:p-8 p-4 flex flex-col sm:flex-row sm:items-center sm:divide-x sm:divide-[#9C9C9C] text-center text-sm">
            <div className="basis-[30%] flex flex-col gap-2 py-2 sm:py-0">
              <div className="font-medium">Date</div>
              <div>{moment(orderData?.created_at).format("DD-MM-YYYY")}</div>
            </div>
            <div className="basis-[40%] flex flex-col gap-2 py-2 sm:py-0">
              <div className="font-medium">Order Number</div>
              <div>{orderData?.order_number}</div>
            </div>
            <div className="basis-[30%] flex flex-col gap-2 py-2 sm:py-0">
              <div className="font-medium">Payment Method</div>
              <div>Card</div>
            </div>
          </div>
          <div className="border-t border-[#A0A0A0] border-dashed" />
          <div className="lg:px-8 lg:py-10 gap-2 px-4 py-6 flex flex-col text-sm font-medium">
            {/* items */}
           {orderData?.order_products?.map((item: any, index: number) => (
            <div className="flex gap-3 justify-between items-start">
              <div>{item.product.name} x {item.quantity}</div>
              <div>${item.price}</div>
            </div>
           ))
            }
            {/* <div className="flex gap-3 justify-between items-start">
              <div>Orange Bundles - 0.5kg x 1</div>
              <div>$20.00</div>
            </div> */}
          </div>
          <div className="border-b border-[#A0A0A0]" />
          <div className="lg:p-8 p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center gap-4 text-sm">
              <div>Sub Total</div>
              <div>${orderData?.sub_total}</div>
            </div>
            <div className="flex justify-between items-center gap-4 text-sm">
              <div>Shipping</div>
              <div>${orderData?.shipping_amount}</div>
            </div>
            <div className="flex justify-between items-center gap-4 text-sm">
              <div>Tax</div>
              <div>${orderData?.vat}</div>
            </div>
          </div>
          <div className="border-t border-[#A0A0A0]" />
          <div className="text-base sm:text-xl lg:p-8 p-4 flex justify-between items-center">
            <div>Order Total</div>
            <div>${orderData?.total_amount + orderData?.shipping_amount}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
