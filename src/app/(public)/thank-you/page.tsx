import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
};

const ThankYouPage = () => {
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative py-8 lg:py-12 ">
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
                <div className="text-[#474747]">Jane Smith</div>
              </div>
              <div className="flex justify-between items-center gap-6 lg:max-w-96 w-full text-sm">
                <div className="font-medium">Address</div>
                <div className="text-[#474747]">
                  465 Oak st# 3b, San Francisco
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 lg:max-w-96 w-full text-sm">
                <div className="font-medium">Phone</div>
                <div className="text-[#474747]">+123-456-789</div>
              </div>
              <div className="flex justify-between items-center gap-6 lg:max-w-96 w-full text-sm">
                <div className="font-medium">Email</div>
                <div className="text-[#474747]">janesmith321@gmail.com</div>
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
              <div>02 may 2023</div>
            </div>
            <div className="basis-[40%] flex flex-col gap-2 py-2 sm:py-0">
              <div className="font-medium">Order Number</div>
              <div>021345675464654</div>
            </div>
            <div className="basis-[30%] flex flex-col gap-2 py-2 sm:py-0">
              <div className="font-medium">Payment Method</div>
              <div>Master Card</div>
            </div>
          </div>
          <div className="border-t border-[#A0A0A0] border-dashed" />
          <div className="lg:px-8 lg:py-10 gap-2 px-4 py-6 flex flex-col text-sm font-medium">
            {/* items */}
            <div className="flex gap-3 justify-between items-start">
              <div>Apple Bundles - 1kg x 1</div>
              <div>$40.00</div>
            </div>
            <div className="flex gap-3 justify-between items-start">
              <div>Orange Bundles - 0.5kg x 1</div>
              <div>$20.00</div>
            </div>
          </div>
          <div className="border-b border-[#A0A0A0]" />
          <div className="lg:p-8 p-4 flex flex-col gap-3">
            <div className="flex justify-between items-center gap-4 text-sm">
              <div>Sub Total</div>
              <div>$60.00</div>
            </div>
            <div className="flex justify-between items-center gap-4 text-sm">
              <div>Shipping</div>
              <div>$80.00</div>
            </div>
            <div className="flex justify-between items-center gap-4 text-sm">
              <div>Tax</div>
              <div>$2.00</div>
            </div>
          </div>
          <div className="border-t border-[#A0A0A0]" />
          <div className="text-base sm:text-xl lg:p-8 p-4 flex justify-between items-center">
            <div>Order Total</div>
            <div>$82.00</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ThankYouPage;
