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
import { getFeaturedProducts, getProductsByCategory } from "@/api/home";
import Skeleton from "../skeleton/Skeleton";

export type Filters = "all" | "fruits" | "vegetables" | "deals" | "new";

const cards = [
  {
    imgUrl: "/images/banana.png",
    title: "Banana: Yellow Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/green-banana.png",
    title: "Banana: Green Plantains",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/strawberries.png",
    title: "Organic Strawberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/blueberries.png",
    title: "Organic Blueberries",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
  {
    imgUrl: "/images/kumquats.png",
    title: "Sweet Kumquats",
    description: "Approx. 40lb",
    price: "$2.99/lb",
    buttonText: "Add to Cart",
    buttonIcon: <FiChevronRight />,
    handleClick: () => {
      console.log("Added in cart");
    },
    isBookmark: true,
    isFav: true,
  },
];

const HomeBestSellingSection = () => {
  // const filters = ["all", "fruits", "vegetables", "deals", "new"];
  const { categories } = useSelector(
    (state: RootState) => state.centeralizedStateData.home
  );

  const [currentFilter, setCurrentFilter] = useState<any>(null);
  const [cat, setCat] = useState<Array<any>>([]);
  const [featuredProducts, setFeaturedProducts] = useState<Array<any>>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true);
  const handleFilter = (index: number) => {
    setCurrentFilter(index);
  };

  useEffect(() => {
    setCat([{name:"All",id:null},...categories])
    setIsLoading(false)
  }, [categories])

  useEffect(() => {
    if(currentFilter === null){
    getFeaturedProducts(null,{page}).then((res) => {
      // console.log(res, "featured products")
      page == 1?
      setFeaturedProducts([...res.data.data])
      :
      setFeaturedProducts([...featuredProducts,...res.data.data])
      if (res.data.data.length >0) {
        setTotal(res.data.total)
      }
    }).catch((err) => {
      console.log(err)
    })
  }
     else {
        getProductsByCategory('93|RkxOUacgowFISAEvQvLOZQa83ihce1hmhuhpgpe5a573563d',null,currentFilter).then((res) => {
          setFeaturedProducts(res.data) // this api response is different  and also doesnot support pagination
          if (res.data.length > 0) {
            setTotal(res.data.total?? null)
          }
        }).catch((err) => {
          console.log(err)
        })
       }
  }, [page,currentFilter])
  console.log(total,"total selling")
  return (
    
    <div className="flex flex-col gap-6 w-full">
      {/* flex item 1 */}
      <div className="w-full flex justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Trending this week:{" "}
          <span className="text-primary">Best Selling Products</span>
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
          {
          // isLoading === false?
           cat.map((item, index) =>
          index <= 3 && (
            <Button
              key={index}
              variant={"outline"}
              size={"lg"}
              onClick={() => handleFilter(item.id??null)}
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
          ))
        
          // :
          // (<Skeleton className="h-12 rounded-full px-8" />)
          }
        </div>
      </div>
      {/* flex item 3 */}
      {/* { featuredProducts.length > 0 ? */}
      <ProductCarousel carouselData={featuredProducts} setPage={setPage} page={page} total={total!} />
      {/* // :
      // <div className="flex items-center justify-center h-[300px]">
      //   <div className="flex flex-col items-center gap-2">
      //     <div className="flex items-center gap-2">
      //       <BsStars className="block" />
      //       <BsStars className="block" />
      //       <BsStars className="block" />
      //       <BsStars className="block" />
      //       <BsStars className="block" />
      //     </div>
      //     <div className="text-primary">No products found</div>
      //   </div>
      // </div>
      // } */}
    </div>
  );
};

export default HomeBestSellingSection;
