import axios from "./axios.config";

export const login = async ({username, password})=> {
        const res = await axios.post(`/auth/login`, {username, password})
        return res.data;
}
export const register = async (values)=> {
    try {
        const res = await axios.post(`/auth/register`, values)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const verifyToken = async ()=> {
        const res = await axios.get(`/auth/profile`,)
        console.log(res)
        return res.data
}
export const logout = async ()=> {
    const res = await axios.delete(`/auth/logout`,)
    return res;
}