import Account from '@/components/account/account'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Account",
};

const AccountPage = () => {
  return (
    <main className='w-full min-h-[72vh] flex justify-center items-center relative'>
        <Account />
        {/* <div className="-z-[1] xl:max-w-[485px] xl:max-h-[485px] sm:max-w-[312px] sm:max-h-[312px] max-w-[196px] max-h-[196px] w-full h-full absolute -left-12 -bottom-[92px] bg-[url('/images/account-left.png')] bg-no-repeat bg-contain bg-left"/>
        <div className="-z-[1] xl:max-w-[485px] xl:max-h-[485px] sm:max-w-[312px] sm:max-h-[312px] max-w-[196px] max-h-[196px] w-full h-full absolute -right-12 -bottom-[92px] bg-[url('/images/account-right.png')] bg-no-repeat bg-contain bg-right"/> */}
    </main>
  )
}

export default AccountPage