import axios from './axios.config'
import {baseUrl} from './base.url'

export const getLike = async (postId)=> {
    try {
        const {data} = await axios.get(`${baseUrl}likes/${postId}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const createLike = async(postId)=> {
    try {
        const {data} = await axios.post(`${baseUrl}likes/${postId}`)
        return data
    } catch (error) {
        console.log(error)
    }
}
export const deleteLike = async (postId)=> {
    try {
        const {data} = await axios.delete(`${baseUrl}likes/${postId}`)
        return data
    } catch (error) {
        console.log(error)
    }
}