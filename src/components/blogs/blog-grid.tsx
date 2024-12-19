"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Button } from "../ui/button";
import { BsStars } from "react-icons/bs";
import { cn } from "@/lib/utils";
import ProductCarouselCard from "../product-carousel-card";
import { useRouter } from "next/navigation";

export type Filters = "all" | "products" | "events" | "news";

const cards = [
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
  {
    imgUrl: "/images/chillies.png",
    title: "Perfect Summer Fruit Salad:",
    buttonText: "Read More",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
  },
];

const BlogGrid = () => {
  const router = useRouter();
  const filters = ["all", "products", "events", "news"];

  const [currentFilter, setCurrentFilter] = useState<Filters>("all");

  const [loadedItems, setLoadedItems] = useState(15);

  const [pageNumber, setPageNumber] = useState(1);

  const isLoadMore = loadedItems < cards.length;

  const handleFilter = (filter: Filters) => {
    setCurrentFilter(filter);
  };

  return (
    <div className="py-8 lg:py-12 w-full flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl lg:text-6xl font-bold">Blogs</h1>
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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-8">
        {cards.slice(0, loadedItems).map((item, index) => (
          <div key={index} className="flex justify-center px-4">
            <div className="mx-auto">
              <ProductCarouselCard
                key={index}
                title={item.title}
                buttonText={item.buttonText}
                imgUrl={item.imgUrl}
                handleClick={() => router.push(`/blogs/${index}`)}
                buttonIcon={item?.buttonIcon}
              />
            </div>
          </div>
        ))}
      </div>
      {isLoadMore ? <div className="flex justify-center mt-6">
        <div>
          <Button
            variant={"outline"}
            size={"xl"}
            onClick={() => {
                setLoadedItems(15 * (pageNumber +1 ));
                setPageNumber(pageNumber + 1);
            }}
            className="font-bold"
          >
            Load More
          </Button>
        </div>
      </div> : null}
    </div>
  );
};

export default BlogGrid;
