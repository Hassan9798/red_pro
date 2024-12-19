import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Image from "next/image";
import ProductDetails from "@/components/products/product-details";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
};

export interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ params }) => {
  return (
    <main className="w-full h-full flex flex-col gap-6 xl:gap-8 relative">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="flex items-center gap-3 text-primary"
              >
                <div>
                  <Image
                    src={"/icons/home.png"}
                    alt="icon"
                    width={24}
                    height={24}
                  />
                </div>
                <div>Home</div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="capitalize">
                {params.id}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <ProductDetails />
    </main>
  );
};

export default ProductDetailPage;
