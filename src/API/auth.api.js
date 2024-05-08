import axios from "./axios.config";

export const login = async ({username, password})=> {
    try {
        const res = await axios.post(`auth/login`, {username, password})
        console.log(res)
    return res.data;
    } catch (error) {
        console.log(error)
    }
}
export const register = async (values)=> {
    try {
        const res = await axios.post(`auth/register`, values)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const verifyToken = async ()=> {
    try {
        const res = await axios.get(`auth/profile`,)
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}