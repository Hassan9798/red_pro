import OrdersTab from '@/components/profile/orders-tab'
import Image from 'next/image'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative">
      <div className="w-full sm:min-h-80 bg-[url('/images/profile-bg.png')] bg-center bg-no-repeat bg-cover flex flex-col justify-end gap-6 px-8 py-4">
        <div className='flex items-center gap-4 lg:gap-6'>
          <Image src={'/images/profile-avatar.png'} alt='avatar' width={96} height={96} />
          <h3 className='text-white font-semibold text-2xl'>
            Emily James
          </h3>
        </div>
        <div className='grid grid-cols-2 gap-8 text-center text-white text-xl font-semibold'>
          <div>Wishlist 0</div>
          <div>Orders 0</div>
        </div>
      </div>
      <section className='flex flex-col gap-6'>
        <h1 className='text-center text-4xl font-semibold text-[#585858]'>
          My Orders
        </h1>
        <OrdersTab />
      </section>
    </main>
  )
}

export default ProfilePage