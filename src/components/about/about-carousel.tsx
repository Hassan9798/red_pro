"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import item1 from "../../../public/images/about-carousel-1.png";
import item2 from "../../../public/images/about-carousel-2.png";
import item3 from "../../../public/images/about-carousel-3.png";
import item4 from "../../../public/images/about-carousel-4.png";

const items = [item1, item2, item3, item4]

const AboutCarousel = () => {
  return (
    <div className="w-full px-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <Image src={item} alt={`${index}`} className="w-full aspect-square" placeholder="blur"/>
          </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default AboutCarousel;
