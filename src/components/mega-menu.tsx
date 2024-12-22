"use client";
import { STORAGE_URL } from "@/config";
import { srisakdi } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export interface MegaMenuProps {
  imgUrl?: string;
  text: string;
  // items: string[];
  items: Array<any>;
  onItemClick: (item: string) => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  imgUrl,
  text,
  items,
  onItemClick,
}) => {
  const [open, setOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  return (
    <div className="overflow-hidden group">
      {/* button */}
      <div className="flex flex-col justify-center items-center text-center gap-2 text-[10px] sm:text-sm text-neutral-light cursor-pointer group">
        {imgUrl ? (
          <Image
            src={STORAGE_URL + imgUrl}
            alt={text}
            width={46}
            height={46}
            className="transition-all duration-300 w-6 h-6 sm:w-12 sm:h-12"
          />
        ) : null}
        <div className="flex items-center gap-1">
          <div>{text}</div>
          <IoChevronDown />
        </div>
      </div>
      <div className="hidden absolute w-full left-0 z-10 group-hover:block lg:px-4">
        <div className="flex flex-col w-full p-4 bg-white rounded-3xl shadow-lg">
          <h2 className="font-medium text-2xl text-center underline underline-offset-8 decoration-primary">
            {text}
          </h2>
          <hr className="bg-neutral-light my-2" />
          <div
            className={cn(
              isFullScreen ? "" : "max-h-[372px]",
              "overflow-auto py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4"
            )}
          >
            {items.length>0 ? items?.map((item, index) => (
              // TODO updates items array with name and href
              <Link
                href={"/category"}
                key={index}
                onClick={() => onItemClick(item)}
                className="transition-all duration-150 p-2 text-lg text-neutral-light hover:bg-[#DDDDDD] cursor-pointer"
              >
                {item.name}
              </Link>
            ))
          :
          <h3 className="text-neutral-light text-right">No Items</h3>
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
