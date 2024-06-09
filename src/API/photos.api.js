import axios from "axios";

export const uploadImage = async (formData)=> {
    try {
        return await axios.post(import.meta.env.VITE_PHOTOS_API_URL,formData)
    } catch (error) {
        return console.log(error)
    }
}