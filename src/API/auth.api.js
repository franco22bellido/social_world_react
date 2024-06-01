import axios from "./axios.config";

export const login = async ({ username, password }) => {
    const res = await axios.post(`/auth/login`, { username, password })
    return res.data;
}
export const register = async (values) => {
        const res = await axios.post(`/auth/register`, values)
        return res.data
}

export const verifyToken = async () => {
    const res = await axios.get(`/auth/profile`,)
    return res.data
}
export const clearCookiesServer = async () => {
    try {
        const res = await axios.delete(`/auth/logout`,)
        return res;
    } catch (error) {
        console.log(error)
    }
}