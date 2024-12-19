"use client";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";

import { IoIosStar, IoMdHeart } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { Button } from "../ui/button";
import ReviewForm from "./review-form";

const ProductDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [counter, setCounter] = useState(1);

  return (
    <div className="py-8 lg:py-12 w-full flex flex-col gap-8">
      {/* gallery and details */}
      <div className="flex flex-col lg:flex-row gap-5 justify-start items-start min-h-[816px] h-full">
        {/* gallery items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:basis-[198px] lg:flex-shrink-0 h-full lg:max-h-[816px] lg:flex lg:flex-col lg:flex-nowrap order-1 lg:order-none gap-5 overflow-y-auto">
          {galleryItems?.map((item, index) => (
            <div
              key={index}
              className={cn(
                "lg:w-[180px] lg:h-[150px] border border-[#F0F0F0] transition-all duration-150 hover:border-primary",
                index === currentImageIndex && "border-primary"
              )}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={item}
                alt="img"
                className="object-contain object-center w-full h-full aspect-square lg:aspect-auto"
              />
            </div>
          ))}
        </div>
        {/* current image */}
        <div className="relative bg-[#F1F1F1] flex justify-center items-center order-none xl:w-[526px] 2xl:w-[682px] lg:h-[816px] aspect-square lg:aspect-auto md:mx-auto">
          <img
            src={galleryItems[currentImageIndex]}
            alt="img"
            className="object-contain object-center w-full h-full"
          />
        </div>
        {/* details */}
        <div className="flex flex-col order-2 lg:order-none gap-6 text-base">
          <div className="flex flex-col gap-1">
            <div>Category: Apple</div>
            <div>
              Availability: <span className="text-green-500">in Stock</span>
            </div>
            <div>Region: USA</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-semibold">APPLE</div>
            <div className="flex gap-1 items-center text-xl">
              <IoIosStar className="text-primary" />
              <IoIosStar className="text-primary" />
              <IoIosStar className="text-primary" />
              <IoIosStar className="text-primary" />
              <IoIosStar className="text-[#D4D4D4]" />
            </div>
            <ul className="ml-5 list-disc font-light text-[#191919]">
              <li>
                Apples are rich in dietary fiber, promoting digestive health and
                aiding
              </li>
              <li>
                Apples are rich in dietary fiber, promoting digestive health
              </li>
              <li>Apples are rich in dietary fiber, promoting</li>
              <li>Apples are rich in dietary fiber</li>
            </ul>
          </div>
          <div className="flex justify-between items-center gap-4 text-sm pb-3 border-b border-[#F0F0F0] flex-wrap whitespace-nowrap">
            <div className="text-primary">
              Quantity Available: <span className="font-semibold">1000</span>
            </div>
            <div className="flex gap-2 sm:gap-0 sm:items-center flex-col sm:flex-row">
              <div>Only 500+ Left&nbsp;&nbsp;</div>
              <div>
                <span className="font-semibold">Qty</span>&nbsp;&nbsp;
                <input
                  className="border border-[#D0D0D0] shadow-md bg-white outline-none px-6 py-1 min-w-52"
                  placeholder="Enter your Quantity Here"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Sizes</div>
            <div className="flex justify-start items-center gap-3 flex-wrap">
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                3 Kg
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                5 Kg
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                6 Kg
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                7 Kg
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                8 Kg
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                9 Kg
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                10 Kg
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-3 border-b border-[#F0F0F0]">
            <div>Grades</div>
            <div className="flex justify-start items-center gap-3 flex-wrap">
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                US Extra Fancy
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                US Fancy
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                US N0 1
              </Button>
              <Button
                variant={"outline-primary"}
                size={"lg"}
                className={cn("rounded-none")}
              >
                US UTILITY
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>USD(incl. of all taxes):</div>
            <div className="text-3xl">
              $600.72&nbsp;
              <span className="text-[#D9D9D9] line-through">$800.00</span>
            </div>
          </div>
          <div className="flex gap-5 items-stretch flex-wrap text-2xl">
            <div className="flex border border-[#F0F0F0]">
              <div
                className="cursor-pointer py-2 px-4 flex justify-center items-center"
                onClick={() => {
                  counter > 1 ? setCounter(counter - 1) : undefined;
                }}
              >
                -
              </div>
              <div className="py-2 px-4 flex justify-center items-center border-l border-r border-[#F0F0F0]">
                {counter}
              </div>
              <div
                className="cursor-pointer py-2 px-4 flex justify-center items-center"
                onClick={() => setCounter(counter + 1)}
              >
                +
              </div>
            </div>
            <div className="flex gap-5 sm:justify-center items-center flex-wrap sm:flex-nowrap">
              <Button
                variant={"primary"}
                size={"xl"}
                className="rounded-none text-white text-sm"
              >
                Buy Now
              </Button>
              <Button
                variant={"outline-primary"}
                size={"xl"}
                className="rounded-none"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="flex justify-center gap-3 border-b border-[#F0F0F0]">
          <TabsTrigger className="text-lg" value="description">
            Description
          </TabsTrigger>
          <TabsTrigger className="text-lg" value="reviews">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="w-[calc(100%-8px)] lg:w-[60%] mx-auto py-8">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium">Product Details</div>
            <ul className="text-base font-medium">
              <li>Net weight, count and/or volume :</li>
              <li>Name and address of producer, packer, or distributor :</li>
              <li>Recommended storage temperature :</li>
              <li>Size and grades :</li>
              <li>Special handling instructions : </li>
            </ul>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              <span className="text-primary">More...</span>
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="w-[calc(100%-8px)] lg:w-[60%] mx-auto py-8">
            <ReviewForm />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col gap-8">
        <div className="mx-auto text-center text-3xl font-medium">
          Related Products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {products.map((item, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="bg-[#F1F1F1] p-4 flex flex-col gap-10 justify-between">
                <div className="w-full flex justify-between gap-3 items-start">
                  {item.tag ? (
                    <div
                      className={cn(
                        item.tagBg,
                        "text-white text-sm px-3 py-1 rounded-full"
                      )}
                    >
                      {item.tag}
                    </div>
                  ) : null}
                  <div className="ml-auto border border-[#D7D7D7] rounded-full p-3">
                    <IoMdHeart
                      className={cn(
                        "text-2xl",
                        index === 0 ? "text-primary" : "text-[#D7D7D7]"
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-72 h-72 object-contain object-center"
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    variant={"outline"}
                    size={"xl"}
                    className={cn(
                      "bg-white border-transparent rounded-none text-[#6F6F6F] font-medium flex gap-2 items-center",
                      index === 3 && "text-primary"
                    )}
                  >
                    <BsCart />
                    <div>{item.buttonText}</div>
                  </Button>
                </div>
              </div>
              <div className="text-center text-sm flex flex-col gap-2">
                <div>{item.name}</div>
                <div className="font-semibold">
                  ${item.price}
                  {item.newPrice ? (
                    <span className="text-[#D9D9D9] line-through">
                      &nbsp;${item.newPrice}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

const galleryItems = [
  "/images/gallery-item-1.png",
  "/images/gallery-item-2.jpeg",
  "/images/gallery-item-3.jpeg",
  "/images/gallery-item-4.jpeg",
];

const products = [
  {
    tag: "NEW",
    tagBg: "bg-green-600",
    imgUrl: "/images/bananas.png",
    name: "Bananas",
    buttonText: "Add to cart",
    price: "800.22",
    newPrice: "1000.66",
  },
  {
    tag: "-10%",
    tagBg: "bg-red-600",
    imgUrl: "/images/apricots.png",
    name: "Apricot",
    buttonText: "Add to cart",
    price: "400.00",
  },
  {
    tag: "HOT",
    tagBg: "bg-yellow-600",
    imgUrl: "/images/blue-burries.png",
    name: "Blue Berries",
    buttonText: "Add to cart",
    price: "700.00",
  },
  {
    imgUrl: "/images/coconuts.png",
    name: "Coconut",
    buttonText: "Out of Stock",
    price: "800.00",
  },
];
