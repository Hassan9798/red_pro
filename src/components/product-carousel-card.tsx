"use client";
import Image from "next/image";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { BsStars } from "react-icons/bs";
import { Button } from "./ui/button";

export interface ProductCarouselCardProps {
  title: string;
  description?: string;
  imgUrl: string;
  price?: string;
  handleClick: () => void;
  buttonText: string;
  buttonIcon?: JSX.Element;
  isFav?: boolean;
  isBookmark?: boolean;
}

const ProductCarouselCard: React.FC<ProductCarouselCardProps> = ({
  title,
  description,
  imgUrl,
  price,
  handleClick,
  buttonText,
  buttonIcon,
  isFav,
  isBookmark,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full bg-white">
      <div className="relative bg-slate-100">
        <Image
          src={imgUrl}
          alt="img"
          width={268}
          height={116}
          className="object-contain rounded-lg object-center mx-auto"
        />
        {isBookmark ? <div
          className="absolute top-2 right-2 cursor-pointer"
          onClick={() => {
            console.log("bookmark product");
          }}
        >
          <CiBookmark className="text-sm text-primary" />
        </div> : null}
        {isFav ? <div
          className="absolute bottom-2 left-2 cursor-pointer"
        >
          <BsStars className="text-sm text-primary" />
        </div> : null}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-base font-bold line-clamp-1">{title}</h3>
        {description ? <p className="text-body text-sm line-clamp-2">{description}</p> : null}
      </div>
      <div className="mt-3 flex items-center gap-4">
        {price ? <div className="text-base text-black mr-auto font-medium">{price}</div> : null}
        <Button variant={"outline-primary"} size={"md"} onClick={handleClick}>
          <div>{buttonText}</div>
          {buttonIcon ? buttonIcon : null}
        </Button>
      </div>
    </div>
  );
};

export default ProductCarouselCard;
