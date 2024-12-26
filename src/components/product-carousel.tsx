"use client";
import React, { useEffect } from "react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCarouselCard from "./product-carousel-card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { STORAGE_URL } from "@/config";
import noImage from "../../public/images/noImage.png";

export interface ProductCarouselProps {
  carouselData: any[],
  setPage?: React.Dispatch<React.SetStateAction<number>>,
  page?: number,
  total?: number
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ carouselData , setPage , page,total}) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [data,setData] = React.useState<any>(carouselData) 

  useEffect(() => { 
    setData(carouselData)
  }, [carouselData])

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
  console.log(current,count,data.length)
  useEffect(() => {
    if(current === data.length && current !== 0 && total &&  data.length < total!){
      console.log("limit reached ",current,data.length)
      setPage && page &&  setPage(page+1)
    }
  }, [current])

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
        {data.map((item: any, index: number) => (
          <CarouselItem
            key={index}
            className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
          >{item.is_active === 1 && (
             <ProductCarouselCard
              key={index}
              title={item.name?? item.title}
              description={item?.description}
              buttonText={item.buttonText ?? "Add to Cart"}
              imgUrl={item.imgUrl?item.imgUrl: item.product_images.length == 1? STORAGE_URL + item.product_images[0] : STORAGE_URL + item.product_images[1] } 
              price={item.inventories && item.inventories.length > 0 ? item.inventories[0].price : item?.price}
              discounted_price={item.inventories && item.inventories.length > 0 ? item.inventories[0].discounted_price : item?.discounted_price}
              handleClick={()=>console.log(`Add to cart ${item.name}`)}
              buttonIcon={item?.buttonIcon}
              isBookmark={item?.isBookmark??true}
              isFav={item?.isFav??true}
            />)}
            {/* <ProductCarouselCard
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
            /> */}
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default ProductCarousel;
