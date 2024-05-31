import axios from "./axios.config";

export const getUserProfile = async (username) => {
    try {
        const res = await axios.get(`/user/${username}`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const getUsersByUsername = async (username) => {
    try {
        const res = await axios.get(`/user/?username=${username}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const updateProfile = async (newProfile) => {
    try {
        const res = await axios.patch(`/profile`, newProfile)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}