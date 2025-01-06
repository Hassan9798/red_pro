import axios from "axios";
import { endpoints } from "./constant";
import { API_BASE_URL, STRIPE_SECRET_KEY } from "@/config";

export const stripePaymentIntent = async (data:any) => {
   const res = await axios.post(endpoints.STRIPE_PAYMENT_INTENT, data, {headers:{
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization":`Bearer ${STRIPE_SECRET_KEY}`
   }})
   return res.data
};
export const confirmPayment= async (data:any) => {
   const res = await axios.post(API_BASE_URL + endpoints.CONFIRM_PAYMENT, data, {headers:{
      "Content-Type": "application/json",
    //   "Authorization":`Bearer ${STRIPE_SECRET_KEY}`
   }})
   return res
}