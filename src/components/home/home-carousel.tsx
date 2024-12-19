"use client";
import React, { useEffect } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import FruitBucket from "../../../public/images/fruit-bucket.png";
import HomeCarouselCard from "./home-carousel-card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getSalesBanners } from "@/api/home";

const cards = [
    {caption: 'Taste Of Nature', heading: 'Eat Clean & Organic', description: 'The most biggest sale event in this year you dont want to miss', buttonText: 'Shop Now', handleClick: () => { console.log("Clicked banner card button")}, eventImgUrl: FruitBucket },
    {caption: 'Taste Of Nature', heading: 'Eat Clean & Organic', description: 'The most biggest sale event in this year you dont want to miss', buttonText: 'Shop Now', handleClick: () => { console.log("Clicked banner card button")}, eventImgUrl: FruitBucket },
    {caption: 'Taste Of Nature', heading: 'Eat Clean & Organic', description: 'The most biggest sale event in this year you dont want to miss', buttonText: 'Shop Now', handleClick: () => { console.log("Clicked banner card button")}, eventImgUrl: FruitBucket },
]

const HomeCarousel = () => {

  const router = useRouter();
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  const [cards , setCards] = React.useState<any>([])
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
  useEffect(()=>{
    getSalesBanners().then((res)=>{
      setCards(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  // const get=async()=>{
  //  const res = await getSalesBanners()
  //  console.log(res,"ressss")
  // }
  return (
    <Carousel setApi={setApi} className="relative w-full" opts={{loop: true }} plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
        <CarouselContent>
          {cards?.map((item:any, index:number) => (
            <CarouselItem key={index}>
                <HomeCarouselCard caption={item.caption} heading={item.heading} description={item.description} buttonText={item.buttonText} handleClick={() => router.push('/category')} eventImgUrl={item.banner_image as string}/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-[50%] -translate-x-[50%] bottom-3 flex gap-3 items-center">
            {cards.map((_:any, index:number) => (
              <div key={index} className={cn("rounded-full w-4 h-4 shadow cursor-pointer", current === (index + 1) ? "bg-primary" : "bg-white")} onClick={() => handleCarouselItem(index)} />
            ))}
          </div>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
  );
};

export default HomeCarousel;
