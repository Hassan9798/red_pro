"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrdersTab = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-base sm:text-lg lg:text-xl font-semibold">
        {tabs.map((item, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 rounded-xl transition-all duration-300 hover:shadow-lg"
            onClick={() => setCurrentTabIndex(index)}
          >
            <div
              className={`flex flex-col items-center gap-6 py-2 ${
                currentTabIndex === index && "border-b border-primary"
              }`}
            >
              <div>
                <Image
                  src={item.iconUrl}
                  alt="icon"
                  width={58}
                  height={58}
                  className="w-[36px] h-[36px] lg:w-[58px] lg:h-[58px]"
                />
              </div>
              <div>{item.title}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-input shadow-md p-6">
        <Table className="min-w-[786px]">
          <TableHeader>
            <TableRow className="lg:px-6 text-base">
              <TableHead className="w-56">Product Name</TableHead>
              <TableHead className="text-center w-32">Product Price</TableHead>
              <TableHead className="text-center w-32">Quantity</TableHead>
              <TableHead className="text-center w-36">
                Product Process
              </TableHead>
              <TableHead className="text-center w-36">
                Product Shipment
              </TableHead>
              <TableHead className="text-right w-32">Shipped</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index} className="lg:px-6">
                <TableCell>{item.name}</TableCell>
                <TableCell className="text-center">$ {item.price}</TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-center">{item.process}</TableCell>
                <TableCell className="text-center">{item.shipment}</TableCell>
                <TableCell className="text-end">{item.shipped}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersTab;

const tabs = [
  {
    iconUrl: "/icons/wallet.png",
    title: "To Pay",
  },
  {
    iconUrl: "/icons/ship.png",
    title: "To Ship",
  },
  {
    iconUrl: "/icons/receive.png",
    title: "To Receive",
  },
  {
    iconUrl: "/icons/topic.png",
    title: "To Review",
  },
];

const data = [
  {
    name: "Apples",
    price: 25,
    quantity: "1 kg",
    process: "Completed",
    shipment: "Completed",
    shipped: "In Progress",
  },
  {
    name: "Apples",
    price: 25,
    quantity: "1 kg",
    process: "Completed",
    shipment: "Completed",
    shipped: "In Progress",
  },
  {
    name: "Apples",
    price: 25,
    quantity: "1 kg",
    process: "Completed",
    shipment: "Completed",
    shipped: "In Progress",
  },
  {
    name: "Apples",
    price: 25,
    quantity: "1 kg",
    process: "Completed",
    shipment: "Completed",
    shipped: "In Progress",
  },
  {
    name: "Apples",
    price: 25,
    quantity: "1 kg",
    process: "Completed",
    shipment: "Completed",
    shipped: "In Progress",
  },
];
