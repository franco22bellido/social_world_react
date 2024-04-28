import axios from "./axios.config";
import { baseUrl } from "./base.url";

export const getCommentsByPost = async (postId)=> {
    try {
        const res = await axios.get(`${baseUrl}comments/${postId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const createComment = async (postId, text)=> {
    try {
        const {data} = await axios.post(`${baseUrl}comments/${postId}`,{ text})
        return data
    } catch (error) {
        console.log(error)
    }
}