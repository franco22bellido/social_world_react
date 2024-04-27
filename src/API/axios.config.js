import axios from "axios";
import Cookies from 'js-cookie'

const token = Cookies.get('token')


const newAxios = axios.create({
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export default newAxios