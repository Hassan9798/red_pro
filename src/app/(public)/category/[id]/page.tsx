import Category from '@/components/category/category'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Category",
};
interface CategoryParams {
  id?: number; // The `?` makes `id` optional if you want to handle `/category` as well.
}
const CategoryPage = ({ params }: { params:CategoryParams }) => {
  return (
    <>
        <Category params={params}/>
    </>
  )
}

export default CategoryPage