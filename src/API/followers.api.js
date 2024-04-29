import axios from "./axios.config"
import {baseUrl} from './base.url'

export const getFollowers = async ()=> {
    try {
        const res = axios.get(`${baseUrl}followers`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteFollower =(followerId)=> {
    try {
        const res = axios.delete(`${baseUrl}followers/${followerId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getFollowings = async ()=> {
    try {
        const res = await axios.get(`${baseUrl}following`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const deleteFollowing = async (followingId)=> {
    try {
        const res = await axios.delete(`${baseUrl}following/${followingId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const followUser = async (followingId)=> {
    try {
        const res = await axios.post(`${baseUrl}following/${followingId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getFollowingById = async (followingId)=> {
    try {
        const res = await axios.get(`${baseUrl}following/${followingId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
