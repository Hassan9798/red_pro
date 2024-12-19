import Category from '@/components/category/category'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Category",
};

const CategoryPage = () => {
  return (
    <>
        <Category />
    </>
  )
}

export default CategoryPage