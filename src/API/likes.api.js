import axios from './axios.config'

export const getLike = async (postId)=> {
    try {
        const {data} = await axios.get(`/likes/${postId}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const createLike = async(postId)=> {
    try {
        const {data} = await axios.post(`/likes/${postId}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const deleteLike = async (postId)=> {
    try {
        const {data} = await axios.delete(`/likes/${postId}`)
        return data
    } catch (error) {
        console.log(error)
    }
}