'use client'
import Category from '@/components/category/category'
import { Metadata } from 'next';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const metadata: Metadata = {
  title: "Category",
};
interface CategoryParams {
  sales?: string; // The `?` makes `id` optional if you want to handle `/category` as well.
}
const CategoryPage = ({ params }: { params:CategoryParams }) => {
  const searchParams = useSearchParams();
  const sales = searchParams.get('sales');
//   const param={sales} as CategoryParams
  return (
    <>
        <Category sales={sales as string} />
    </>
  )
}

export default CategoryPage