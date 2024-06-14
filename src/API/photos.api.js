import axios from "axios";

const _axios = axios.create({
    baseURL: import.meta.env.VITE_PHOTOS_API_URL
})

export const uploadImage = async (formData)=> {
    try {
        return await _axios.post('/',formData)
    } catch (error) {
        return console.log(error)
    }
}
export const deleteImage = async (public_id)=> {
    return await _axios.delete(`/${public_id}`)
}