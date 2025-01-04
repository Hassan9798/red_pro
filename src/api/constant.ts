import { CUSTOMER_URL } from "@/config"

export const SALES_BANNERS_LISTING= "/api/customer/promotions/sales"

export const endpoints = {
SALES_BANNERS_LISTING: `${CUSTOMER_URL}/promotions/sales`,
GET_CATEGORIES: `${CUSTOMER_URL}/categories`,
PROMOTIONS_DISCOUNT:`${CUSTOMER_URL}/promotions/discount`,
GET_ALL_PRODUCTS:`${CUSTOMER_URL}/products`,
FEATURED_PRODUCTS:`${CUSTOMER_URL}/product/featureds`,
ALL_SALES_PRODUCTS:`${CUSTOMER_URL}/product/sales`,
GET_PRODUCTS_BY_CATEGORY:`${CUSTOMER_URL}/filter/products/category`,
GET_PRODUCTS_BY_PRICE:`${CUSTOMER_URL}/filter/products/price`,
LOGIN: `${CUSTOMER_URL}/login`,

}