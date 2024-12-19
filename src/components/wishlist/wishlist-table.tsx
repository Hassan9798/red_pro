"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { TfiTrash } from "react-icons/tfi";
import { Button } from "../ui/button";

const WishlistTable = () => {
  return (
    <Table className="min-w-[786px]">
      <TableHeader>
        <TableRow className="lg:px-6 text-base">
          <TableHead className="w-80">Product</TableHead>
          <TableHead className="text-center max-w-48">Quantity</TableHead>
          <TableHead className="max-w-16">Price</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {wishlistData.map((item, index) => (
          <TableRow key={index} className="lg:px-6">
            <TableCell>
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={102}
                    height={102}
                    className="rounded-xl border border-input"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-medium text-base">{item.title}</div>
                  <div className="text-xs">
                    <span className="font-medium">SKU:&nbsp;</span>
                    <span className="text-[#555555]">{item.sku}</span>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="w-full flex justify-center items-center">
                <div className="border border-[#B4B4B4] flex items-center justify-between max-w-24 w-full text-base">
                  <div
                    className="flex justify-center items-center p-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    +
                  </div>
                  <div className="flex-1 flex justify-center items-center p-2 border-x border-[#B4B4B4]">
                    {item.quantity}
                  </div>
                  <div
                    className="flex justify-center items-center p-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    -
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-sm font-medium">
              $&nbsp;{item.price}
            </TableCell>
            <TableCell>
              <div className="w-full flex justify-end items-stretch gap-3">
                <Button variant={"primary"} size={"md"} className="rounded-xl">
                  Add to cart
                </Button>
                <div className="border border-[#5E5E5E] rounded-xl flex justify-center items-center p-2 cursor-pointer">
                  <TfiTrash className="text-lg" />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WishlistTable;

const wishlistData = [
  {
    imageUrl: "/images/wishlist-item.png",
    title: "Bulk Quantity Apples",
    sku: 123456,
    quantity: 1,
    price: 405,
  },
  {
    imageUrl: "/images/wishlist-item.png",
    title: "Bulk Quantity Apples",
    sku: 123456,
    quantity: 1,
    price: 405,
  },
  {
    imageUrl: "/images/wishlist-item.png",
    title: "Bulk Quantity Apples",
    sku: 123456,
    quantity: 1,
    price: 405,
  },
];
