"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { BsStars } from "react-icons/bs";
import NavLink from "../nav-link";
import ProductCarousel from "../product-carousel";
import { FiChevronRight } from "react-icons/fi";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { getAllProducts, getProductsByCategory } from "@/api/home";

export type Filters = "all" | "fruits" | "vegetables" | "deals" | "new";

// const cards = [
//   {
//     imgUrl: "/images/banana.png",
//     title: "Banana: Yellow Plantains",
//     description: "Approx. 40lb",
//     price: "$2.99/lb",
//     buttonText: "Add to Cart",
//     buttonIcon: <FiChevronRight />,
//     handleClick: () => {
//       console.log("Added in cart");
//     },
//     isBookmark: true,
//   },
//   {
//     imgUrl: "/images/green-banana.png",
//     title: "Banana: Green Plantains",
//     description: "Approx. 40lb",
//     price: "$2.99/lb",
//     buttonText: "Add to Cart",
//     buttonIcon: <FiChevronRight />,
//     handleClick: () => {
//       console.log("Added in cart");
//     },
//     isBookmark: true,
//   },
//   {
//     imgUrl: "/images/strawberries.png",
//     title: "Organic Strawberries",
//     description: "Approx. 40lb",
//     price: "$2.99/lb",
//     buttonText: "Add to Cart",
//     buttonIcon: <FiChevronRight />,
//     handleClick: () => {
//       console.log("Added in cart");
//     },
//     isBookmark: true,
//   },
//   {
//     imgUrl: "/images/blueberries.png",
//     title: "Organic Blueberries",
//     description: "Approx. 40lb",
//     price: "$2.99/lb",
//     buttonText: "Add to Cart",
//     buttonIcon: <FiChevronRight />,
//     handleClick: () => {
//       console.log("Added in cart");
//     },
//     isBookmark: true,
//   },
//   {
//     imgUrl: "/images/kumquats.png",
//     title: "Sweet Kumquats",
//     description: "Approx. 40lb",
//     price: "$2.99/lb",
//     buttonText: "Add to Cart",
//     buttonIcon: <FiChevronRight />,
//     handleClick: () => {
//       console.log("Added in cart");
//     },
//     isBookmark: true,
//   },
// ];

const HomeExploreSection = () => {
  const { categories } = useSelector(
    (state: RootState) => state.centeralizedStateData.home
  );

  // const filters = ["all", "fruits", "vegetables", "deals", "new"];

  const [currentFilter, setCurrentFilter] = useState<any>(null);
  const [cat, setCat] = useState<Array<any>>([]);
  const [allProducts, setAllProducts] = useState<Array<any>>([]);
  const [page , setPage] = useState(1);
  const [total,setTotal] = useState(0)

  const handleFilter = (id: number) => {
    setCurrentFilter(id);
  };

  useEffect(()=>{
    setCat([{name:"All",id:null},...categories])
  },[categories])

  useEffect(()=>{
    if(currentFilter === null){
    getAllProducts(null,{page}).then((res)=>{
      page === 1?
      setAllProducts([...res.data.data])

      :
      setAllProducts([...allProducts,...res.data.data])
      if (res.data.data.length >0) {
        setTotal(res.data.total)
      }

    }).catch((err)=>{
      console.log(err)
    })
  }
     else {
            getProductsByCategory('93|RkxOUacgowFISAEvQvLOZQa83ihce1hmhuhpgpe5a573563d',null,currentFilter).then((res) => {
              setAllProducts(res.data) // this api response is different  and also doesnot support pagination
              if (res.data.length > 0) {
                setTotal(res.data.total?? null)
              }
            }).catch((err) => {
              console.log(err)
            })
           }
  },[page,currentFilter])

  return (
    <div className="flex flex-col gap-6 w-full">
        {/* flex item 1 */}
      <div className="w-full flex justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Explore:{" "}
          <span className="text-primary">Popular Products</span>
        </h1>
        <div className="flex items-center gap-6">
          <NavLink href="/category" text="View all" />
          {/* carousel buttons */}
          <div className="flex gap-3"></div>
        </div>
      </div>
      {/* flex item 2 */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center">
        <div className="text-sm">Shop by:</div>
        <div className="flex gap-4 items-center flex-wrap">
          {cat.length > 0 && cat.map((item, index) => 
           index <= 3 && (
            <Button
              key={index}
              variant={"outline"}
              size={"lg"}
              onClick={() => handleFilter(item?.id??null)}
              className={cn(item.id === currentFilter && "text-primary")}
            >
              <BsStars
                className={cn(
                  item.id === currentFilter ? "block" : "hidden",
                  "text-sm"
                )}
              />
              <div className="capitalize">{item.name}</div>
            </Button>
          )
          )}
        </div>
      </div>
      {/* flex item 3 */}
      { allProducts.length > 0 ?
      <ProductCarousel carouselData={allProducts} setPage={setPage} page={page} total={total!} />
      :
      <div className="flex items-center justify-center h-[300px]">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <BsStars className="block" />
            <BsStars className="block" />
            <BsStars className="block" />
            <BsStars className="block" />
            <BsStars className="block" />
          </div>
          <div className="text-primary">No products found</div>
        </div>
      </div>
      }
    </div>
  );
};

export default HomeExploreSection;
