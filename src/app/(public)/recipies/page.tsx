import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import sidePineapple from "../../../../public/images/recipe-side-pineapple.png";
import sideOrange from "../../../../public/images/recipe-side-orange.png";
import sideBanana from "../../../../public/images/recipe-side-banana.png";
import RecipeSection from "@/components/recipies/recipe-section";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recipies",
};

const RecipiesPage = () => {
  const recipiesSections = [
    {
      carouselItems: section1Cards,
      sideImage: sidePineapple,
    },
    {
      carouselItems: section2Cards,
      sideImage: sideOrange,
    },
    {
      carouselItems: section3Cards,
      sideImage: sideBanana,
    },
  ];

  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="flex items-center gap-3 text-primary"
              >
                <div>
                  <Image
                    src={"/icons/home.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>Home</div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recipies</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="py-8 lg:py-12 w-full flex flex-col gap-8">
        {recipiesSections.map((item, index) => (
          <RecipeSection
            key={index}
            carouselItems={item.carouselItems}
            sideImage={item.sideImage}
          />
        ))}
      </div>
    </main>
  );
};

export default RecipiesPage;

const section1Cards = [
  {
    imgUrl: "/images/recipe-pineapples.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-pineapples.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-pineapples.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-pineapples.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-pineapples.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-pineapples.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
];

const section2Cards = [
  {
    imgUrl: "/images/recipe-oranges.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-oranges.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-oranges.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-oranges.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-oranges.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-oranges.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-oranges.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
];

const section3Cards = [
  {
    imgUrl: "/images/recipe-bananas.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-bananas.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-bananas.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-bananas.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-bananas.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-bananas.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-bananas.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
  {
    imgUrl: "/images/recipe-bananas.png",
    title: "Tropical Treats: Fresh Pineapples Delivered To Your Doorstep",
    description: "Indulge in the juicy sweetness of our premium pineapples",
    price: "$14.99/lb",
    cutPrice: "$19.00",
    savePercentage: "25%",
    onBookmark: undefined,
    onWishlist: undefined,
  },
];
