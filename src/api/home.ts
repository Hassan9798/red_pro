import { API_BASE_URL } from "@/config";
import { endpoints, SALES_BANNERS_LISTING, } from "./constant";
import axios from "axios";
import { GET } from "./request";

export const get = async (path: string, token?: string | null, params?: any) => {
  const HEADER = {
    headers: token
      ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
      : {
        'Content-Type': 'application/json',
      },
    params: params
  }
  const response = await axios.get(`${API_BASE_URL}${path}`, HEADER);
  return response;
};

export const getSalesBanners = async () => {
  // const res =  GET(`${API_BASE_URL}${SALES_BANNERS_LISTING}`,null,"");

  const response = await axios(`${API_BASE_URL}${endpoints.SALES_BANNERS_LISTING}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getCategories = async () => {
  const response = await axios(`${API_BASE_URL}${endpoints.GET_CATEGORIES}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getPromotionDiscount = async () => {
  const response = await axios(`${API_BASE_URL}${endpoints.PROMOTIONS_DISCOUNT}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
};

export const getAllProducts = async (token?: string | null, params?: any) => {
  const response = await get(`${endpoints.GET_ALL_PRODUCTS}`, token, params)
  return response
};


export const getFeaturedProducts = async (token?: string | null, params?: any) => {
  const response = await get(`${endpoints.FEATURED_PRODUCTS}`, token, params)
  // const response = await axios(`${API_BASE_URL}${endpoints.FEATURED_PRODUCTS}`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  return response;
};

export const getAllSalesProducts = async (token?: string | null, params?: any) => {
  const response = await get(`${endpoints.ALL_SALES_PRODUCTS}`, token, params)
  return response;
};

export const getProductsByCategory = async (token?: string | null, params?: any,catId?:number | null) => {
  const response = await get(`${endpoints.GET_PRODUCTS_BY_CATEGORY}/${catId}`, token, params)
  return response;
};

export const getProductsByPrice = async (token?: string | null, params?: any) => {
  const response = await get(`${endpoints.GET_PRODUCTS_BY_PRICE}`, token, params)
  return response;
};