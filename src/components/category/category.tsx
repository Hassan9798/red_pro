"use client";
import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";

import categoryFilterImage from "../../../public/images/category-filter-image.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { BsStars } from "react-icons/bs";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import ProductCarouselCard from "../product-carousel-card";

export type Filters = "all" | "fruits" | "vegetables" | "deals" | "new";

const Category = () => {
  const filters = ["all", "fruits", "vegetables", "deals", "new"];
  const categories = [
    "all",
    "apples",
    "avocades",
    "bananas",
    "berries",
    "citrus",
    "dried fruits & nuts",
    "grapes",
    "melons",
    "pears",
    "stone fruits & cherries",
  ];
  const totalPages = [1, 2, 3];

  const [currentFilter, setCurrentFilter] = useState<Filters>("fruits");
  const [currentCategory, setCurrentCategory] = useState("all");
  const [price, setPrice] = useState([10]);
  const [page, setPage] = useState(1);

  const handleFilter = (filter: Filters) => {
    setCurrentFilter(filter);
  };

  const handleCategory = (category: string) => {
    setCurrentCategory(category);
  };

  const handlePrice = (value: number[]) => {
    setPrice(value);
  };

  const handlePage = (value: number) => {
    setPage(value);
  };

  const handlePrevious = () => {
    if (page > 1) {
        setPage(page - 1);
    }
  }

  const handleNext = () => {
    if (page < totalPages.length) {
        setPage(page + 1);
    }
  }
  return (
    <main className="w-full min-h-screen flex flex-col gap-8">
      <div className="flex py-12 items-start gap-4">
        {/* filters column */}
        <div className="md:basis-[26%] hidden md:flex flex-col gap-8">
          <h1 className="text-4xl font-bold">
            Category /&nbsp;
            <span className="text-primary capitalize">{currentFilter}</span>
          </h1>
          {/* filters range */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-start w-full max-w-96">
              <div className="font-semibold text-base">Filters:</div>
              <div className="flex flex-col gap-2 w-full">
                <Slider
                  defaultValue={[10]}
                  min={10}
                  max={120}
                  step={1}
                  onValueChange={handlePrice}
                  value={price}
                  className="w-full pt-2"
                />
                <div className="w-full flex justify-between items-center font-bold text-[10px] text-neutral-light">
                  <div>$10</div>
                  <div>$120</div>
                </div>
              </div>
            </div>
            <div className="pl-3 py-2 max-w-96 flex flex-col gap-4 relative">
              {/* border left */}
              <div className="absolute top-0 left-0 w-[2px] h-24 bg-primary rounded-full" />
              <div className="text-base font-medium">Category:</div>
              <div className="flex flex-col gap-2">
                {categories.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-sm font-medium capitalize cursor-pointer text-neutral-light",
                      item === currentCategory && "text-primary"
                    )}
                    onClick={() => handleCategory(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <Image
              src={categoryFilterImage}
              alt="image"
              placeholder="blur"
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-8">
          {/* top bar */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            {/* search input */}
            <div className="w-full xl:max-w-[40%] p-3 bg-[#DBDBDB]/50 flex items-center rounded-full">
              <div className="flex w-full gap-2 px-2 items-center">
                <Image
                  src={"/icons/search.png"}
                  alt="search"
                  width={14}
                  height={15}
                />
                {/* <div className='text-sm text-neutral-light'>Search</div> */}
                <input
                  placeholder="Search"
                  className="bg-transparent w-full text-sm text-neutral-light focus-visible:outline-none"
                />
              </div>
            </div>
            {/* filters */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="text-sm">Shop by:</div>
              <div className="flex gap-4 items-center flex-wrap">
                {filters.map((item, index) => (
                  <Button
                    key={index}
                    variant={"outline"}
                    size={"lg"}
                    onClick={() => handleFilter(item as Filters)}
                    className={cn(item === currentFilter && "text-primary")}
                  >
                    <BsStars
                      className={cn(
                        item === currentFilter ? "block" : "hidden",
                        "text-sm"
                      )}
                    />
                    <div className="capitalize">{item}</div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {cards.map((item, index) => (
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
            ))}
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="w-full flex justify-end gap-1 items-center text-base font-bold text-[#DDDDDD]">
        {totalPages.map((item, index) => (
          <div key={index} onClick={() => handlePage(item)}>
            <span className={`${item === page && "text-primary"} cursor-pointer`}>{item}</span>
            &nbsp;,
          </div>
        ))}
        <div>...</div>
        <div className="flex items-center gap-2 text-2xl">
            <div onClick={handlePrevious} className={`${page > 1 && "text-primary"} cursor-pointer`}><GoChevronLeft /></div>
            <div onClick={handleNext} className={`${page < 3 && "text-primary"} cursor-pointer`}><GoChevronRight /></div>
        </div>
      </div>
    </main>
  );
};

export default Category;

const cards = [
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
];
