import axios from "axios";
import { baseUrl } from "./base.url";
// import Cookies from "js-cookie";

// const token = Cookies.get('token')

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: true
  // headers :{ Authorization : `Bearer ${token}`}
});

export default instance;