"use client";
import React, { useEffect, useState } from "react";
import MegaMenu from './mega-menu'
import { fruits } from '@/constants'
import Link from "next/link";
import Image from "next/image";
import { get } from "http";
import { getCategories } from "@/api/home";

const navItems = [
  { imgUrl: '/icons/fruit.png', text: 'Fruits', items: fruits, onItemClick: (item: string) => { console.log(item) } },
  { imgUrl: '/icons/vegetable.png', text: 'Vegetables', items: fruits, onItemClick: (item: string) => { console.log(item) } },
  { imgUrl: '/icons/seasonal.png', text: 'Seasonal', items: fruits, onItemClick: (item: string) => { console.log(item) } },
  { imgUrl: '/icons/deal.png', text: 'Deals', items: fruits, onItemClick: (item: string) => { console.log(item) } },
  // { imgUrl: '/icons/recipe.png', text: 'Recipes', items: fruits, onItemClick: (item: string) => { console.log(item)} },
]


const HeaderNav = () => {

  const [categories, setCategories] = useState<Array<any>>([])

  useEffect(() => {
    getCategories().then((res) => {
      console.log(res.data,"categories>>")
      setCategories(res.data.categories.data)
    })
      .catch((err) => {
        console.log(err)
      })
  },[])

  return (
    <nav className="flex justify-center sm:justify-start items-center gap-2 sm:gap-4 xl:gap-8 flex-wrap">
      {categories?.map((item: any, index: number) => (
        // <NavItem imgUrl={item.imgUrl} text={item.text} key={index}/>
        <MegaMenu
          key={index}
          text={item.name}
          imgUrl={item.category_image}
          items={item.children}
          onItemClick={item.onItemClick}
        />
      ))}
      <Link href={'/recipies'}>
        <div className="flex flex-col justify-center items-center text-center gap-2 text-[10px] sm:text-sm text-neutral-light cursor-pointer group">
          <Image
            src={'/icons/recipe.png'}
            alt={'recipe'}
            width={46}
            height={46}
            className="transition-all duration-300 w-6 h-6 sm:w-12 sm:h-12"
          />
          <div className="flex items-center gap-1">
            <div>Recipes</div>
            {/* <IoChevronDown /> */}
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default HeaderNav;
