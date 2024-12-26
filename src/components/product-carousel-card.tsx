"use client";
import Image, { StaticImageData } from "next/image";
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
  discounted_price?: string;
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
  discounted_price,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full bg-white ">
      <div className="relative bg-slate-100 w-268">
        <img
          src={imgUrl}
          alt="img"
          // width={268}
          // height={116}
          // 116
          className="object-cover rounded-lg mx-auto h-44 "
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
        {description ? <p className="text-body text-sm line-clamp-1">{description}</p> : null}
      </div>
      <div className="mt-3 flex items-center gap-4">
      {discounted_price &&
       <div className={'text-base mr-auto font-medium text-black'}>{"$"+discounted_price}</div>}

        {price &&
         <div className={`text-base mr-auto font-medium ${discounted_price ? 'text-gray-500 line-through' : 'text-black'
          }`}>{"$"+price}</div>
        }
        <Button variant={"outline-primary"} size={"md"} onClick={handleClick}>
          <div>{buttonText}</div>
          {buttonIcon ? buttonIcon : null}
        </Button>
      </div>

    </div>
  );
};

export default ProductCarouselCard;
