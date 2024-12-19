"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { BsStars } from "react-icons/bs";
import NavLink from "../nav-link";
import ProductCarousel from "../product-carousel";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export type Filters = "all" | "products" | "events" | "news";

const HomeLatestNewsSection = () => {
  const router = useRouter();
  const filters = ["all", "products", "events", "news"];

  const cards = [
    {
      imgUrl: "/images/chillies.png",
      title: "Perfect Summer Fruit Salad:",
      buttonText: "Read More",
      buttonIcon: <FiChevronRight />,
      handleClick: () => {
        router.push('/blogs/1');
      },
    },
    {
      imgUrl: "/images/chillies.png",
      title: "Perfect Summer Fruit Salad:",
      buttonText: "Read More",
      buttonIcon: <FiChevronRight />,
      handleClick: () => {
        router.push('/blogs/1');
      },
    },
    {
      imgUrl: "/images/chillies.png",
      title: "Perfect Summer Fruit Salad:",
      buttonText: "Read More",
      buttonIcon: <FiChevronRight />,
      handleClick: () => {
        router.push('/blogs/1');
      },
    },
    {
      imgUrl: "/images/chillies.png",
      title: "Perfect Summer Fruit Salad:",
      buttonText: "Read More",
      buttonIcon: <FiChevronRight />,
      handleClick: () => {
        router.push('/blogs/1');
      },
    },
    {
      imgUrl: "/images/chillies.png",
      title: "Perfect Summer Fruit Salad:",
      buttonText: "Read More",
      buttonIcon: <FiChevronRight />,
      handleClick: () => {
        router.push('/blogs/1');
      },
    },
  ];

  const [currentFilter, setCurrentFilter] = useState<Filters>("all");

  const handleFilter = (filter: Filters) => {
    setCurrentFilter(filter);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
        {/* flex item 1 */}
      <div className="w-full flex justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">
            Our Latest Blogs:{" "}
          <span className="text-primary">Latest News</span>
        </h1>
        <div className="flex items-center gap-6">
          <NavLink href="#" text="View all" />
          {/* carousel buttons */}
          <div className="flex gap-3"></div>
        </div>
      </div>
      {/* flex item 2 */}
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
      {/* flex item 3 */}
      <ProductCarousel carouselData={cards} />
    </div>
  );
};

export default HomeLatestNewsSection;
