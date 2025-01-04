import axios from "axios";
import { endpoints } from "./constant";
import { API_BASE_URL } from "@/config";
import Cookies from 'js-cookie';

export const login = async (email: string, password: string) => {
    const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
    const response = await axios.post(`${API_BASE_URL + endpoints.LOGIN}`, formData,{
        headers:{
            "Content-Type": "multipart/form-data"
        }
    })
    return response;
};
export const saveTokenToCookie = (token:string) => {
    Cookies.set('token', token, { expires: 7 }); // Store token for 7 days
  };
  