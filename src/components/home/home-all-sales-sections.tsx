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
import { getAllSalesProducts, getProductsByCategory } from "@/api/home";



const HomeAllSalesSection = () => {
  const { categories } = useSelector(
    (state: RootState) => state.centeralizedStateData.home
  );

  const [currentFilter, setCurrentFilter] = useState<any>(null);
  const [cat, setCat] = useState<Array<any>>([]);
  const [allSalesProducts, setAllSalesProducts] = useState<Array<any>>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number | null>(0)
  const handleFilter = (index: number) => {
    setCurrentFilter(index);
  };

  useEffect(() => {
    setCat([{name:"All",id:null},...categories])
  }, [categories])

  useEffect(() => {
    if(currentFilter === null){
    getAllSalesProducts(null,{page}).then((res) => {
      page === 1 ?
      setAllSalesProducts([...res.data.data])
      :
      setAllSalesProducts([...allSalesProducts,...res.data.data])
      if (res.data.data.length > 0) {
        setTotal(res.data.total)
      }
    }).catch((err) => {
      console.log(err)
    })
   }
   else {
    getProductsByCategory('93|RkxOUacgowFISAEvQvLOZQa83ihce1hmhuhpgpe5a573563d',null,currentFilter).then((res) => {
      setAllSalesProducts(res.data) // this api response is different  and also doesnot support pagination
      if (res.data.length > 0) {
        setTotal(res.data.total?? null)
      }
    }).catch((err) => {
      console.log(err)
    })
   }
  }, [page,currentFilter])

  console.log(total,"all sales")

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* flex item 1 */}
      <div className="w-full flex justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Products:{" "}
          <span className="text-primary">All Sales Products</span>
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
          index <= 3 &&
          (
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
          ))}
        </div>
      </div>
      {/* flex item 3 */}

     {/* { allSalesProducts.length > 0 ? */}
      <ProductCarousel carouselData={allSalesProducts} setPage={setPage} page={page} total={total!} />
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

export default HomeAllSalesSection;
