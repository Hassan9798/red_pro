import axios from 'axios'
import { API_BASE_URL } from "@/config";

// const token = localStorage.getItem('token')
// GLOBAL POST REQUEST WITH AUTHRIZATION
const POST = async (path: string, token: string | null, data: any) => {
    // GETTING RESPONSE
    let res = await fetch(
        path,
        {
            method: 'POST',
            headers: token
                ? {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
                : {
                    'Content-Type': 'application/json',
                },
            body: JSON.stringify(data),
        });
    return res
}

// GLOBAL GET REQUEST WITH AUTHRIZATION
const GET = async (path: string, token: string | null, params: any) => {
    // SETTING UP HEADER & PARAMS
    let res = await fetch(
        API_BASE_URL + path + params ,
        {
            method: 'GET',
            headers: token
                ? {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
                : {
                    'Content-Type': 'application/json',
                }
        });
    return res.json()
}

// GLOBAL PUT REQUEST WITH AUTHRIZATION
const PUT = async (path: string, token: string | null, params: any, data: any) => {
    // SETTING UP HEADER & PARAMS
    const HEADER = {
        headers: token
            ? {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
            : {
                'Content-Type': 'application/json',
            },
    }
    // GETTING RESPONSE
    let res = await axios.put(API_BASE_URL + path + '/' + params, data, HEADER)
    return res.data
}

// GLOBAL DELETE REQUEST WITH AUTHRIZATION
const DELETE = async (path: string, token: string | null, params: any) => {
    // SETTING UP HEADER & PARAMS
    const HEADER = {
        headers: token
            ? {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
                params: params,
            }
            : {
                'Content-Type': 'application/json',
                params: params,
            },
    }
    // GETTING RESPONSE
    let res = await axios.delete(API_BASE_URL + path, HEADER)
    return res.data
}

export { POST, GET, PUT, DELETE }