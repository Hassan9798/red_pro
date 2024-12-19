"use client";
import React from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCarouselCard from "./product-carousel-card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface ProductCarouselProps {
  carouselData: any[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ carouselData }) => {
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
        {carouselData.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
          >
            <ProductCarouselCard
              key={index}
              title={item.title}
              description={item?.description}
              buttonText={item.buttonText}
              imgUrl={item.imgUrl}
              price={item?.price}
              handleClick={item.handleClick}
              buttonIcon={item?.buttonIcon}
              isBookmark={item?.isBookmark}
              isFav={item?.isFav}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default ProductCarousel;
