import { useEffect, useState } from "react";
import Modal from "../modal";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPage from "../CheckoutPage";
import { convertToSubcurrency, getStripe } from "@/lib/utils";
import { STRIPE_PUBLIC_KEY } from "@/config";

if (STRIPE_PUBLIC_KEY === undefined) {
    throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const Payment = ({ amount,open,checkoutId ,shippingAmount}: any) => {

    const [isModalOpen, setIsModalOpen] = useState(open??false);
    // const [stripePromise, setStripePromise] = useState<Promise<Stripe | null>| null>(null);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // useEffect(()=>{
    //     const stripe = getStripe()
    //     console.log(stripe,"stripe")
    //     setStripePromise(stripe);

    // },[])

    console.log(stripePromise,"stripePromise")
    return (
        <Modal isOpen={isModalOpen} >
            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubcurrency(amount),
                    currency: "usd",
                }}
            >
                <CheckoutPage amount={amount}  checkoutId={checkoutId} shippingAmount={shippingAmount} closeModal={closeModal}/>
            </Elements>
        </Modal>
    )
}

export default Payment