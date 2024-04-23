import axios from "axios";
import { baseUrl } from "./base.url";

export const login = async ({username, password})=> {
    const res = await axios.post(`${baseUrl}auth/login`, {username, password})
    return res.data;
}

export const register = async (values)=>{
    const res = await axios.post(baseUrl, values)
    return res.data;
}