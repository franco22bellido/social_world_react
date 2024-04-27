import axios from "./axios.config"
import { baseUrl } from "./base.url"

const pathname = 'posts/'


export const getPostsByFollowing = async ()=> {
    try {
        const res = await axios.get(`${baseUrl}${pathname}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getOne = async (postId)=> {
    try {
        const res = await axios.get(`${baseUrl}${pathname}${postId}`)
        return res.data
    } catch (error) {
        return console.log(error)
    }
}

export const createPost = async (values)=> {
    try {
        const res = await axios.post(`${baseUrl}${pathname}`, values)
        return res.data
    } catch (error) {
        console.log(error)
    }
}