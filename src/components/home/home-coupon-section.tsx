import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomeCouponSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* grid item 1 */}
      <div className="rounded-3xl min-h-72 bg-primary flex flex-col gap-4 text-white px-5 py-6">
        <h1 className="text-4xl md:text-8xl font-bold">50% OFF</h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          On Your First Purchase:
          <br />
          <span className="text-[#FBFBFD]/75">Use Code REDPRODUCE99</span>
        </h2>
        <div>
          <Link href={'/category'}>
            <Button
              variant={"primary"}
              size={"md"}
              className="bg-white text-primary hover:bg-white hover:text-primary hover:tracking-wider"
            >
              Explore Now
            </Button>
          </Link>
        </div>
      </div>
      {/* grid item 2 */}
      <div className="rounded-3xl row-span-2 min-h-72">
        <video autoPlay muted loop className="w-full h-full object-cover rounded-3xl">
            <source src="/videos/fruit-salad.mp4" type="video/mp4"/>
        </video>
      </div>
      {/* grid item 3 */}
      <div className="rounded-3xl min-h-72 bg-[url('/images/vegetables-banner.jpg')] bg-no-repeat bg-cover" />
    </div>
  );
};

export default HomeCouponSection;
