import WishlistTable from '@/components/wishlist/wishlist-table';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wishlist",
};

const Wishlist = () => {
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative">
        <div className='flex flex-col gap-8'>
            <div className='flex items-center justify-center mx-auto text-3xl lg:text-4xl font-medium'>
                <FaRegHeart />
                &nbsp;
                Wishlist
            </div>
            <WishlistTable />
        </div>
    </main>
  )
}

export default Wishlist