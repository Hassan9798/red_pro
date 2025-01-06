"use client";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useEffect, useState } from "react";

import { IoIosStar, IoIosStarHalf, IoIosStarOutline, IoMdHeart } from "react-icons/io";
import { BsCart, BsStars } from "react-icons/bs";
import { Button } from "../ui/button";
import ReviewForm from "./review-form";
import { getProductDetails } from "@/api/products";
import { STORAGE_URL } from "@/config";
import toast from "react-hot-toast";
import { addItem, decQuantity, incQuantity } from "@/redux/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const ProductDetails = ({ id }: any) => {
  const router = useRouter()
  const cart = useSelector((state: RootState) => state.centeralizedStateData.cart)
  const dispatch = useDispatch()

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [counter, setCounter] = useState(1);
  const [product, setProduct] = useState<any>(null);
  const [inventory, setInventory] = useState<any>(null);
  const [currentInventoryIndex, setCurrentInventoryIndex] = useState(0);

  const points = product?.product?.description.split('.').map((point: any) => point.trim()).filter((point: any) => point);
  const itemCartDetails = cart?.items?.find((item: any) => item.product.id === product?.product?.id && item.product.vendor_id === product?.product?.vendor_id)
  const maxStars = 5;
  const fullStars = product ? Math.floor(product?.average_rating) : 0;
  const halfStar = product ? product?.average_rating % 1 >= 0.5 ? 1 : 0 : 0;
  const emptyStars = product ? maxStars - fullStars - halfStar : 5;

  useEffect(() => {
    getProductDetails(id).then((res) => {
      setProduct(res)
      // console.log(res,"res detail")
      setInventory(res.product.inventories[0] ?? {})
    })
      .catch((err) => {
        console.log(err);
      })
  }, [id])

  const handleInventory = (item: any) => {
    // setCurrentInventoryIndex(index)
    setInventory(item)
  }
  const handleAddToCart = (item: any) => {
    const obj = {
      category_id: item.category_id,
      vendor_id: item.vendor_id,
      id: item.id,
      description: item.description,
      inventory_id: item.inventories[0].id,
      grade_id: item.inventories[0].grade_id,
      price: parseInt(item.inventories[0].discounted_price ?? item.inventories[0].price),
      quantity: counter,
      image: JSON.parse(item.inventories[0].inventory_image)[0],
      size: item.inventories[0].size,
      name: item.name,
    }
    dispatch(addItem(obj))
  }

  const handleQuantity = (change: "increment" | "decrement") => {
    const obj = {
      product: {
        id: product?.product?.id,
        vendor_id: product?.product?.vendor_id,
        price: parseInt(inventory?.discounted_price ?? inventory.price),
        total: itemCartDetails?.total
      }
    }
    if (change === "increment") {
      dispatch(incQuantity(obj))
    }
    else {
      dispatch(decQuantity(obj))
    }
  };

  const handleBuyNow = (item: any) => {
    handleAddToCart(item)
    router.push("/checkout")
  }

  return (
    <div className="py-8 lg:py-12 w-full flex flex-col gap-8">
      {/* gallery and details */}
      <div className="flex flex-col lg:flex-row gap-5 justify-start items-start min-h-[816px] h-full">
        {/* gallery items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:basis-[198px] lg:flex-shrink-0 h-full lg:max-h-[816px] lg:flex lg:flex-col lg:flex-nowrap order-1 lg:order-none gap-5 overflow-y-auto">
          {product?.product?.product_images?.map((item: any, index: any) => (
            <div
              key={index}
              className={cn(
                "lg:w-[180px] lg:h-[150px] border border-[#F0F0F0] transition-all duration-150 hover:border-primary",
                index === currentImageIndex && "border-primary"
              )}
              onClick={() => setCurrentImageIndex(index)}
            >
              <img
                src={STORAGE_URL + item}
                alt="img"
                className="object-contain object-center w-full h-full aspect-square lg:aspect-auto"
              />
            </div>
          ))}
        </div>
        {/* current image */}
        <div className="relative bg-[#F1F1F1] flex justify-center items-center order-none xl:w-[526px] 2xl:w-[682px] lg:h-[816px] aspect-square lg:aspect-auto md:mx-auto">
          <img
            src={STORAGE_URL + product?.product?.product_images[currentImageIndex]}
            alt="img"
            className="object-contain object-center w-full h-full"
          />
        </div>
        {/* details */}
        <div className="flex flex-col order-2 lg:order-none gap-6 text-base">
          <div className="flex flex-col gap-1">
            <div>Category: {product?.product?.category?.name}</div>
            <div>
              Availability: <span className="text-green-500">{product?.product?.inventories?.length > 0 ? "in Stock" : "Out of Stock"}</span>
            </div>
            <div>Region: USA</div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl font-semibold">{product?.product?.name}</div>
            <div className="flex gap-1 items-center text-xl">
              {Array.from({ length: fullStars }).map((_, i) => (
                <IoIosStar key={`full-${i}`} className="text-primary" />
              ))}
              {halfStar === 1 && <IoIosStarHalf className="text-primary" />}
              {Array.from({ length: emptyStars }).map((_, i) => (
                <IoIosStarOutline key={`empty-${i}`} className="text-[#D4D4D4]" />
              ))}
            </div>
            <ul className="ml-5 list-disc font-light text-[#191919]">
              {
                points?.map((point: any, i: number) =>
                (<li>
                  {point}
                </li>
                )
                )
              }
            </ul>
          </div>
          <div className="flex justify-between items-center gap-4 text-sm pb-3 border-b border-[#F0F0F0] flex-wrap whitespace-nowrap">
            <div className="text-primary">
              Quantity Available: <span className="font-semibold">{inventory?.quantity ?? "0"}</span>
            </div>
            {/* <div className="flex gap-2 sm:gap-0 sm:items-center flex-col sm:flex-row">
              <div>Only 500+ Left&nbsp;&nbsp;</div>
              <div>
                <span className="font-semibold">Qty</span>&nbsp;&nbsp;
                <input
                  className="border border-[#D0D0D0] shadow-md bg-white outline-none px-6 py-1 min-w-52"
                  placeholder="Enter your Quantity Here"
                />
              </div>
            </div> */}
          </div>
          <div className="flex flex-col gap-2">
            <div>Sizes</div>
            <div className="flex justify-start items-center gap-3 flex-wrap">
              {product?.product?.inventories?.length > 0 ?
                product?.product?.inventories?.map((item: any, i: number) => (
                  <Button
                    variant={inventory?.id === item.id ? "primary" : "outline-primary"}
                    size={"lg"}
                    className={cn("rounded-none")}
                    type="submit"
                    onClick={() => handleInventory(item)}
                  >
                    {item.sizes}
                  </Button>
                ))
                :
                <BsStars className="block" />
              }
            </div>
          </div>
          <div className="flex flex-col gap-2 pb-3 border-b border-[#F0F0F0]">
            <div>Grades</div>
            <div className="flex justify-start items-center gap-3 flex-wrap">
              {product?.product?.inventories?.length > 0 ?
                product?.product?.inventories?.map((item: any) => (

                  <Button
                    variant={inventory?.id === item.id ? "primary" : "outline-primary"}
                    size={"lg"}
                    className={cn("rounded-none")}
                    type="submit"
                    onClick={() => handleInventory(item)}
                  >
                    {item.grade.name}
                  </Button>
                ))
                :
                <BsStars className="block" />
              }

            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>USD(incl. of all taxes):</div>
            <div className="text-3xl">
              {inventory && '$' + inventory?.discounted_price ? inventory?.discounted_price : inventory?.price} &nbsp;
              {inventory?.discounted_price && <span className="text-[#D9D9D9] line-through">${inventory?.price}</span>}
            </div>
          </div>
          <div className="flex gap-5 items-stretch flex-wrap text-2xl">
            <div className="flex border border-[#F0F0F0]">
              <div
                className="cursor-pointer py-2 px-4 flex justify-center items-center"
                onClick={() => {
                  counter > 1 ? setCounter(counter - 1) : undefined;
                  handleQuantity("decrement")
                }}
              >
                -
              </div>
              <div className="py-2 px-4 flex justify-center items-center border-l border-r border-[#F0F0F0]">
                {itemCartDetails?.quantity ?? counter}
              </div>
              <div
                className="cursor-pointer py-2 px-4 flex justify-center items-center"
                onClick={() => {
                  setCounter(counter + 1);
                  handleQuantity("increment")
                }}
              >
                +
              </div>
            </div>
            <div className="flex gap-5 sm:justify-center items-center flex-wrap sm:flex-nowrap">
              <Button
                variant={"primary"}
                size={"xl"}
                className="rounded-none text-white text-sm"
                type="submit"
                disabled={product?.product?.inventories.length > 0 ? false : true}
                onClick={() => handleBuyNow(product.product)}
              >
                Buy Now
              </Button>
              <Button
                variant={"outline-primary"}
                size={"xl"}
                className="rounded-none"
                type="submit"
                disabled={product?.product?.inventories.length > 0 ? false : true}
                onClick={() => { handleAddToCart(product.product); toast.success("Item added to cart") }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="flex justify-center gap-3 border-b border-[#F0F0F0]">
          <TabsTrigger className="text-lg" value="description">
            Description
          </TabsTrigger>
          <TabsTrigger className="text-lg" value="reviews">
            Reviews
            <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-0 dark:border-gray-900">{product?.total_ratings}</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="w-[calc(100%-8px)] lg:w-[60%] mx-auto py-8">
          <div className="flex flex-col gap-2">
            <div className="text-lg font-medium">Product Details</div>
            <ul className="text-base font-medium">
              <li>Net weight, count and/or volume :</li>
              <li>Name and address of producer, packer, or distributor :</li>
              <li>Recommended storage temperature :</li>
              <li>Size and grades :</li>
              <li>Special handling instructions : </li>
            </ul>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
              <span className="text-primary">More...</span>
            </p>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="w-[calc(100%-8px)] lg:w-[60%] mx-auto py-8">
          <ReviewForm />
        </TabsContent>
      </Tabs>
      <div className="flex flex-col gap-8">
        <div className="mx-auto text-center text-3xl font-medium">
          Related Products
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {products.map((item, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="bg-[#F1F1F1] p-4 flex flex-col gap-10 justify-between">
                <div className="w-full flex justify-between gap-3 items-start">
                  {item.tag ? (
                    <div
                      className={cn(
                        item.tagBg,
                        "text-white text-sm px-3 py-1 rounded-full"
                      )}
                    >
                      {item.tag}
                    </div>
                  ) : null}
                  <div className="ml-auto border border-[#D7D7D7] rounded-full p-3">
                    <IoMdHeart
                      className={cn(
                        "text-2xl",
                        index === 0 ? "text-primary" : "text-[#D7D7D7]"
                      )}
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-72 h-72 object-contain object-center"
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    variant={"outline"}
                    size={"xl"}
                    className={cn(
                      "bg-white border-transparent rounded-none text-[#6F6F6F] font-medium flex gap-2 items-center",
                      index === 3 && "text-primary"
                    )}
                  >
                    <BsCart />
                    <div>{item.buttonText}</div>
                  </Button>
                </div>
              </div>
              <div className="text-center text-sm flex flex-col gap-2">
                <div>{item.name}</div>
                <div className="font-semibold">
                  ${item.price}
                  {item.newPrice ? (
                    <span className="text-[#D9D9D9] line-through">
                      &nbsp;${item.newPrice}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

const galleryItems = [
  "/images/gallery-item-1.png",
  "/images/gallery-item-2.jpeg",
  "/images/gallery-item-3.jpeg",
  "/images/gallery-item-4.jpeg",
];

const products = [
  {
    tag: "NEW",
    tagBg: "bg-green-600",
    imgUrl: "/images/bananas.png",
    name: "Bananas",
    buttonText: "Add to cart",
    price: "800.22",
    newPrice: "1000.66",
  },
  {
    tag: "-10%",
    tagBg: "bg-red-600",
    imgUrl: "/images/apricots.png",
    name: "Apricot",
    buttonText: "Add to cart",
    price: "400.00",
  },
  {
    tag: "HOT",
    tagBg: "bg-yellow-600",
    imgUrl: "/images/blue-burries.png",
    name: "Blue Berries",
    buttonText: "Add to cart",
    price: "700.00",
  },
  {
    imgUrl: "/images/coconuts.png",
    name: "Coconut",
    buttonText: "Out of Stock",
    price: "800.00",
  },
];
