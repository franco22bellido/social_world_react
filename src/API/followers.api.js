import axios from "./axios.config"

export const getFollowers = async () => {
    try {
        const res = await axios.get(`/followers`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteFollower = async (followerId) => {
    try {
        const res = await axios.delete(`/followers/${followerId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getFollowings = async () => {
    try {
        const res = await axios.get(`/following`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteFollowing = async (followingId) => {
    try {
        const res = await axios.delete(`/following/${followingId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
    
}
export const followUser = async (followingId) => {
    try {
        const res = await axios.post(`/following/${followingId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getFollowingById = async (followingId) => {
    try {
        const res = await axios.get(`/following/${followingId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
