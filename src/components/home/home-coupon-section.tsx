"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "../ui/carousel";
import HomeCarouselCard from "./home-carousel-card";
import { cn } from "@/lib/utils";
import Autoplay from "embla-carousel-autoplay";
// import router, { useRouter } from "next/router";
import { getPromotionDiscount } from "@/api/home";
import FruitBucket from "../../../public/images/fruit-bucket.png";
import { useRouter } from "next/navigation";
const cards = [
  { caption: 'Taste Of Nature', heading: 'Eat Clean & Organic', description: 'The most biggest sale event in this year you dont want to miss', buttonText: 'Shop Now', handleClick: () => { console.log("Clicked banner card button") }, eventImgUrl: FruitBucket },
  { caption: 'Taste Of Nature', heading: 'Eat Clean & Organic', description: 'The most biggest sale event in this year you dont want to miss', buttonText: 'Shop Now', handleClick: () => { console.log("Clicked banner card button") }, eventImgUrl: FruitBucket },
  { caption: 'Taste Of Nature', heading: 'Eat Clean & Organic', description: 'The most biggest sale event in this year you dont want to miss', buttonText: 'Shop Now', handleClick: () => { console.log("Clicked banner card button") }, eventImgUrl: FruitBucket },
]

const HomeCouponSection = () => {
  const router = useRouter();
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [cards, setCards] = React.useState<any>([])
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const handleCarouselItem = (index: number) => {
    setCurrent(index + 1);
    api?.scrollTo(index);
  }
  useEffect(() => {
    getPromotionDiscount().then((res) => {
      console.log('okokok',res.data)
      setCards(res.data)

    }).catch((err) => {
      console.log(err)
    })
  }, [])


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {/* grid item 1 */}
      {/* <div className="rounded-3xl min-h-72 bg-primary flex flex-col gap-4 text-white px-5 py-6">
        <h1 className="text-4xl md:text-8xl font-bold">50% OFF</h1>
        <h2 className="text-3xl md:text-4xl font-bold">
          On Your First Purchase:
          <br />
          <span className="text-[#FBFBFD]/75">Use CgDPRODUCE99</span>
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
      </div> */}
      {/* 
 //////CAROUSEL WORK START/// */}
      {/* <Carousel>
      <CarouselContent>
        <div className="relative w-full overflow-hidden rounded-3xl h-full">
          {cards && cards.length > 0 ? (
            cards.map((item: any, index: number) => (
              <CarouselItem key={index}>
                <HomeCarouselCard
                  caption={item.caption}
                  heading={item.heading}
                  description={item.description}
                  buttonText={item.buttonText}
                  handleClick={() => router.push('/category')}
                  eventImgUrl={item.banner_image as string}
                />
              </CarouselItem>
            ))
          ) : (
            <p className="text-center text-gray-500">No items available</p>
          )}
        </div>
      </CarouselContent>
    </Carousel> */}

      {/* COUSREL WORK END */}

 <div className="rounded-3xl min-h-72">

      <Carousel setApi={setApi} className="relative w-full "  opts={{loop: true }} plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
        <CarouselContent>
          {cards?.map((item:any, index:number) =>{
            return (
            <CarouselItem key={index}>
                <div className="h-[288px]" >
                <HomeCarouselCard  caption={item.caption} heading={item.heading} description={item.description} buttonText={item.buttonText} handleClick={() => router.push('/category')} eventImgUrl={item.banner_image as string}/>
                </div>
            </CarouselItem>
          )})}
        </CarouselContent>
        <div className="absolute left-[50%] -translate-x-[50%] bottom-3 flex gap-3 items-center">
            {cards.map((_:any, index:number) => (
              <div key={index} className={cn("rounded-full w-4 h-4 shadow cursor-pointer", current === (index + 1) ? "bg-primary" : "bg-white")} onClick={() => handleCarouselItem(index)} />
            ))}
          </div>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
</div>




























      {/* grid item 2 */}
      <div className="rounded-3xl row-span-2 min-h-72">
        <video autoPlay muted loop className="w-full h-full object-cover rounded-3xl">
          <source src="/videos/fruit-salad.mp4" type="video/mp4" />
        </video>
      </div>
      {/* grid item 3 */}
      <div className="rounded-3xl min-h-72 bg-[url('/images/vegetables-banner.jpg')] bg-no-repeat bg-cover" />
    </div>
  );
};

export default HomeCouponSection;
