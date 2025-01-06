'use client'
import CartItemList from '@/components/shopping-cart/cart-item-list';
import Link from 'next/link'
import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { Metadata } from "next";
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const metadata: Metadata = {
  title: "Shopping Cart",
};

const ShoppingCartPage = () => {
  const cart = useSelector((state:RootState) => state.centeralizedStateData.cart)
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative py-8 lg:py-12">
        <div className='mx-auto max-w-screen-lg w-full flex flex-col gap-8'>
            <Link href={'/category'} className='flex items-center gap-3 text-lg font-medium'>
                <FaChevronLeft />
                <div>Continue Shopping</div>
            </Link>
            <hr className='bg-[#D0CFCF] w-full'/>
            { cart.items.length>0 ?
              (<CartItemList cart={cart} />)
              :
              (
                <div>No Items in Cart </div>
              )
            }
        </div>
    </main>
  )
}

export default ShoppingCartPage