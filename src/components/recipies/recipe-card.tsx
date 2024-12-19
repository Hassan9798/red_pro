import Image from "next/image";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { IoAddCircleOutline } from "react-icons/io5";

export interface RecipeCardProps {
  imgUrl: string;
  title: string;
  description: string;
  price: string;
  cutPrice: string;
  savePercentage: string;
  onBookmark: () => void | undefined;
  onWishlist: () => void | undefined;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  imgUrl,
  title,
  description,
  cutPrice,
  price,
  savePercentage,
  onBookmark,
  onWishlist,
}) => {
  return (
    <div className="px-2 flex flex-col gap-4">
      <div className="bg-[#F9F9F9] rounded-3xl p-4 flex">
        <Image
          src={imgUrl}
          alt={"recipe image"}
          width={166}
          height={138}
          className="object-contain mx-auto object-center"
        />
      </div>
      <div className="line-clamp-2 text-sm font-medium">{title}</div>
      <div className="line-clamp-3 text-[10px]">{description}</div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-medium">
          <span className="text-sm">{price}</span>
          &nbsp;
          <span className="text-[8px] line-through">{cutPrice}</span>
          &nbsp;
          <span className="text-[10px] text-primary">
            Save&nbsp;${savePercentage}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div onClick={onBookmark} className="text-primary text-sm">
            <CiBookmark />
          </div>
          <div onClick={onWishlist} className="text-primary text-sm">
            <IoAddCircleOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
