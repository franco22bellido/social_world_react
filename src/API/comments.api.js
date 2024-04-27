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