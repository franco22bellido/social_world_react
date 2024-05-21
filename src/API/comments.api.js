import axios from "./axios.config";


export const getCommentsByPost = async (postId)=> {
    try {
        const res = await axios.get(`/comments/${postId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const createComment = async (postId, text)=> {
    try {
        const {data} = await axios.post(`/comments/${postId}`,{ text})
        return data
    } catch (error) {
        console.log(error)
    }
}