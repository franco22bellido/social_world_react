import axios from "./axios.config"

const pathname = 'posts/'


export const getPostsByFollowing = async ()=> {
    try {
        const res = await axios.get(`${pathname}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getOne = async (postId)=> {
    try {
        const res = await axios.get(`${pathname}${postId}`)
        return res.data
    } catch (error) {
        return console.log(error)
    }
}

export const createPost = async (values)=> {
    try {
        const res = await axios.post(`${pathname}`, values)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deletePost = async  (postId)=> {
    try {
        const res = await axios.delete(`${pathname}${postId}`)
        return res;
    } catch (error) {
        console.log(error)
    }
}