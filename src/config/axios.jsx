import axios from 'axios'

const backendUrlLocal = "https://ecommerce321.onrender.com/"
const backendUrlProd = "https://ecommerce321.onrender.com/"
const axiosClient = axios.create( {
  baseURL: backendUrlLocal
} )

export default axiosClient