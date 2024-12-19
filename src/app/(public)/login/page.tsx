import LoginForm from '@/components/login/login-form'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <main className='w-full py-12 pb-24 relative min-h-[72vh] flex justify-center items-center'>
        {/* <div className="absolute -left-12 w-[calc(100%+96px)] min-h-[calc(72vh-96px)] bg-[url('/images/login-bg.png')] bg-cover bg-no-repeat flex items-stretch"> */}
            <LoginForm />
        {/* </div> */}
    </main>
  )
}

export default LoginPage