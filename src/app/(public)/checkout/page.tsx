import CheckoutForm from "@/components/checkout/checkout-form";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

const CheckoutPage = () => {
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative py-8 lg:py-12">
      <CheckoutForm />
    </main>
  );
};

export default CheckoutPage;
