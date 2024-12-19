"use client";
import React from "react";
import { Button } from "../ui/button";

const HomeDetailsSection = () => {
  const handleClick = () => {
    console.log("Request");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-bold">
          Standing Order Reservation: &nbsp;
          <span className="text-primary">Save Your Time</span>
        </h1>
        <p className="text-base text-body">
          Secure your weekly time slot and frequently purchased items by
          reserving in advance. Standing orders are easily adjustable, allowing
          for flexibility while saving you precious time during the ordering
          process. Let our committed corporate concierge team assist you in
          establishing your standing order effortlessly.
        </p>
        <div>
          <Button variant={"outline-primary"} size={"lg"} onClick={handleClick}>
            Request Today
          </Button>
        </div>
      </div>
      <div className="w-full flex justify-center items-center min-h-full md:min-h-[532px]">
        <div className="bg-[url('/images/red-produce-van.png')] rounded-3xl bg-no-repeat bg-contain object-fill md:bg-center w-full h-full" />
      </div>
    </div>
  );
};

export default HomeDetailsSection;
