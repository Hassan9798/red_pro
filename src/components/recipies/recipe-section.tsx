"use client";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "../ui/button";
import Image, { StaticImageData } from "next/image";
import RecipeCard from "./recipe-card";

export interface RecipeSectionProps {
    carouselItems: any[];
    sideImage: StaticImageData;
}

const RecipeSection: React.FC<RecipeSectionProps> = ({ carouselItems, sideImage }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handlePreviousCarouselItem = () => {
    if (api?.canScrollPrev()) {
      api?.scrollPrev();
    }
  };

  const handleNextCarouselItem = () => {
    if (api?.canScrollNext()) {
      api?.scrollNext();
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* section */}
      <div className="flex items-center justify-between gap-8">
        {/* text part */}
        <div className="w-full max-w-full lg:basis-[66%] lg:max-w-[66%] flex flex-col gap-8">
          {/* heading */}
          <h1 className="font-bold text-4xl">
            Alaska Salmon Peanut Sauce Rice Bowl
          </h1>
          {/* details and carousel */}
          <div className="flex flex-col gap-4">
            <p className="text-lg">
              Bowls make everything better, and easier, especially during the
              Lenten season. Simply toss cooked rice with nigella or black
              sesame seeds. Grill skewered Alaska sockeye salmon with a little
              oil, salt and pepper. Place 2 cups mixed greens in a bowl, 3/4 cup
              rice, and 3 dollops of bottled peanut sauce. Add 1 cup of cucumber
              tomato salad, salmon, and top with 1 Tbsp of sauce. Easiest flavor
              bomb ever. &nbsp;
              <Link href={"#"} className="underline">
                View all
              </Link>
            </p>
            <Carousel
              setApi={setApi}
              className="relative w-full flex flex-col"
              opts={{ loop: true, align: "start" }}
            >
              <div className="w-full mb-4 flex justify-end items-center">
                <div
                  onClick={handlePreviousCarouselItem}
                  className="text-2xl text-black hover:text-primary cursor-pointer"
                >
                  <FiChevronLeft />
                </div>
                <div
                  onClick={handleNextCarouselItem}
                  className="text-2xl text-black hover:text-primary cursor-pointer"
                >
                  <FiChevronRight />
                </div>
              </div>
              <CarouselContent className="">
                {carouselItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="basis-full md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                  >
                    <RecipeCard key={index} {...item}/>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div>
              <Button variant={"primary"} size={"lg"} className="rounded-2xl text-base">
                Add to Cart All
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex">
            <Image src={sideImage} alt="pineapple" placeholder="blur" className="object-cover object-center"/>
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
