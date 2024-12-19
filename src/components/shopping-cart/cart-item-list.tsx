"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CartItemList = () => {
  const router = useRouter();
  const [items, setItems] = useState<any[]>(cartItems);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Function to handle quantity changes
  const handleQuantity = (item: any, change: "increment" | "decrement") => {
    const updatedItems = [...items]; // Create a copy to avoid mutation
    const index = updatedItems.findIndex((i) => i === item);

    if (index !== -1) {
      const updatedItem = { ...updatedItems[index] }; // Copy the item object

      if (change === "increment" && updatedItem.quantity > 0) {
        updatedItem.quantity++;
      } else if (change === "decrement" && updatedItem.quantity > 1) {
        updatedItem.quantity--;
      } else if (change === "decrement" && updatedItem.quantity === 1) {
        // Remove the item from the cart if quantity reaches 0
        updatedItems.splice(index, 1);
      }

      // Update state using a function that returns the new state
      setItems((prevItems) => [
        ...prevItems.slice(0, index),
        updatedItem,
        ...prevItems.slice(index + 1),
      ]);
    }
  };

  // Function to handle item deletion
  const handleDelete = (item: any) => {
    const updatedItems = items.filter((i) => i !== item);
    setItems(updatedItems);
  };

  const goToCheckout = () => {
    router.push("/checkout");
  }

  return (
    <div className="flex flex-col gap-8">
      {/* heading and checkout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* headings */}
        <div className="flex flex-col gap-2">
          <div className="text-xl">Shopping Cart</div>
          <div className="text-sm">You have {items?.length} in your cart</div>
        </div>
        {/* total price and checkout */}
        <div className="flex flex-col gap-2">
          <div className="text-sm font-semibold sm:text-end">
            Total: ${totalPrice}
          </div>
          <div>
            <Button variant={"primary"} size={"md"} onClick={goToCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
      {/* items list */}
      <div className="flex flex-col gap-4 sm:gap-6 p-2 sm:p-4 border border-[#D0CFCF] rounded-xl shadow-md max-h-[80vh] overflow-y-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full p-2 sm:p-3 sm:pr-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-md rounded-xl"
          >
            {/* image, name and quantity*/}
            <div className="flex items-center gap-3 w-full">
              <Image
                src={item?.imageUrl}
                alt={item?.name || ""}
                width={112}
                height={112}
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-lg"
              />
              <div className="flex flex-col gap-3 max-w-96 w-full">
                <div className="text-base sm:text-lg">{item?.name}</div>
                <div className="text-sm line-clamp-2">{item?.description}</div>
              </div>
              {/* quantity */}
              <div className="sm:ml-auto flex items-center gap-2 sm:gap-5 text-lg font-medium">
                <div>{item?.quantity}</div>
                <div className="flex flex-col gap-2 text-2xl">
                  <div
                    onClick={() => handleQuantity(item, "increment")}
                    className="cursor-pointer"
                  >
                    <IoMdArrowDropup />
                  </div>
                  <div
                    onClick={() => handleQuantity(item, "decrement")}
                    className="cursor-pointer"
                  >
                    <IoMdArrowDropdown />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:max-w-64 w-full gap-5">
              <div className="w-full flex items-center justify-between sm:justify-end gap-12">
                <div className="text-lg">${item?.price * item?.quantity}</div>
                <div
                  onClick={() => handleDelete(item)}
                  className="text-2xl cursor-pointer"
                >
                  <FaRegTrashAlt />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItemList;

const cartItems = [
  {
    name: "Strawberries",
    description: "Lorem Ipsum is simply dummy text ...",
    quantity: 1,
    price: 681,
    imageUrl: "/images/cart-items/strawberries.png",
  },
  {
    name: "Oranges",
    description: "Lorem Ipsum is simply dummy text ...",
    quantity: 1,
    price: 681,
    imageUrl: "/images/cart-items/oranges.png",
  },
  {
    name: "Watermelon",
    description: "Lorem Ipsum is simply dummy text ...",
    quantity: 1,
    price: 681,
    imageUrl: "/images/cart-items/watermelon.png",
  },
];
