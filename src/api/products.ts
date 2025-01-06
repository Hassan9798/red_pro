import axios from "axios";
import { endpoints } from "./constant";
import { get } from "./home";
import { API_BASE_URL } from "@/config";

export const getProductDetails = async (id: string) => {
    const res = await get(`${endpoints.GET_PRODUCT_DETAILS}/${id}`)
    return res.data;
};
export const checkout = async (data: any,token:string) => {
    const res = await axios.post(`${API_BASE_URL}${endpoints.CHECK_OUT}`, data, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
    return res.data;
};