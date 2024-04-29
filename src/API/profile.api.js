import { baseUrl } from "./base.url";
import axios from "./axios.config"; 

export const getUserProfile = async (username)=> {
    try {
        const res = await axios.get(`${baseUrl}user/${username}`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getUsersByUsername = async (username)=> {
    try {
        const res = await axios.get(`${baseUrl}user/?username=${username}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}