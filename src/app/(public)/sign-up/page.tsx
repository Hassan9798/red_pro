import SignUpForm from '@/components/signup/signup-form'
import React from 'react'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
};

const SignUpPage = () => {
  return (
    <main className='w-full py-12 relative min-h-[72vh] flex justify-center items-center'>
        {/* <div className="absolute -left-12 w-[calc(100%+96px)] min-h-[calc(72vh-96px)] bg-[url('/images/signup-bg.png')] bg-cover bg-no-repeat flex items-stretch"> */}
            <SignUpForm />
        {/* </div> */}
    </main>
  )
}

export default SignUpPage