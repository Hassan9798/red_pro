"use client";
import React from 'react'
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const Account = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.push("/login");
    }

    const handleSignUp = () => {
        router.push("/sign-up");
    }
  return (
    <div className='flex flex-col max-w-[556px] lg:max-w-[720px] gap-8'>
        <div className='flex flex-col gap-2 text-center'>
            <h1 className='text-primary text-5xl lg:text-6xl'>
                Grocery Shop Has Never
            </h1>
            <h2 className='text-4xl lg:text-5xl'>Been this much Fun</h2>
        </div>
        <div className='flex flex-col gap-6'>
            <Button variant={'primary'} size={'xl'} className='lg:max-w-52 w-full mx-auto' onClick={handleLogin}>Login</Button>
            <Button variant={'outline-primary'} size={'xl'} className='text-lg font-medium lg:max-w-52 w-full mx-auto' onClick={handleSignUp}>Sign Up</Button>
        </div>
    </div>
  )
}

export default Account