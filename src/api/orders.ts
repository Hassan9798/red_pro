import { API_BASE_URL } from "@/config"
import axios from "axios"
import { endpoints } from "./constant"
import { get } from "./home"

export const createOrder=async(data:any,token:string)=>{
    const res = await axios.post(`${API_BASE_URL}${endpoints.CREATE_ORDER}`,data,{
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    })
    return res.data
}

export const getOrder=async(id:any,token:string)=>{
    const res = await axios.get(`${API_BASE_URL}${endpoints.CREATE_ORDER}/${id}`,{
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
        })
    return res.data
}