import { API_BASE_URL } from "@/config";
import { GET } from "./request";
import { SALES_BANNERS_LISTING } from "./constant";
import axios from "axios";

export const getSalesBanners = async () => {
    // const res =  GET(`${API_BASE_URL}${SALES_BANNERS_LISTING}`,null,"");

    const response = await axios(`${API_BASE_URL}${SALES_BANNERS_LISTING}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return  response;
};