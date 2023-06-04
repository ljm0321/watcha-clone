import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'f02b13b19929daa724112580f7a923dd',
        language: 'ko-KR'
    }
})

export default axiosInstance;