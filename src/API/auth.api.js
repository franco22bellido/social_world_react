import axios from "./axios.config";
import { baseUrl } from "./base.url";

export const login = async ({username, password})=> {
    const res = await axios.post(`${baseUrl}auth/login`, {username, password})
    return res.data;
}
export const register = async (values)=> {
    try {
        const res = await axios.post(`${baseUrl}auth/register`, values)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const verifyToken = async (token)=> {
    const res = await axios.get(`${baseUrl}auth/profile`, {
        headers: 
        {Authorization: `Bearer ${token}`}
    } )
    return res.data
}