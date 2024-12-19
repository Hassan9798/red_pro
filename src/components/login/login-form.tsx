"use client";
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from "yup";
import { Button } from '../ui/button';
import Link from 'next/link';

const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required").max(50, "Only 50 characters are allowed"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").min(8).max(24),
    confirmPassword: Yup.string().required("Confirm Password is required").min(8).max(24),
})

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit(values, _formikHelpers) {
            console.log(values);
        },
    })
  return (
    <div className='shadow-2xl w-full sm:max-w-screen-md min-h-full p-8 sm:p-16 bg-white rounded-3xl sm:rounded-[100px] flex flex-col'>
        <form className='my-auto w-full flex flex-col justify-center gap-8'>
            <h3 className='text-3xl sm:text-4xl'>Login to your account</h3>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col gap-2'>
                    <input 
                        name="email"
                        type='text'
                        placeholder="Email Address"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='placeholder:text-[#5A5A5A] text-lg py-2 outline-none border-b border-[#5A5A5A] focus-visible:border-primary'
                    />
                    {/* error */}
                    {(formik.touched.email && Boolean(formik.errors.email)) && typeof formik.errors.email === "string" ? (
                        <div className='text-red-500 text-sm'>{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className='flex flex-col gap-2'>
                    <input 
                        name="password"
                        type='password'
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className='placeholder:text-[#5A5A5A] text-lg py-2 outline-none border-b border-[#5A5A5A] focus-visible:border-primary'
                    />
                    {/* error */}
                    {(formik.touched.password && Boolean(formik.errors.password)) && typeof formik.errors.password === "string" ? (
                        <div className='text-red-500 text-sm'>{formik.errors.password}</div>
                    ) : null}
                </div>
            </div>
            <Button variant={'primary'} size={'xl'} >Login</Button>
            <div className='text-base font-medium'>Don't Have An Account?&nbsp;<Link href={'/sign-up'} className='text-primary underline decoration-primary'>Signup</Link></div>
        </form>
    </div>
  )
}

export default LoginForm;