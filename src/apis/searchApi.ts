// import axios from 'axios';
import axiosInstance from './index';

// const api_key = 'f02b13b19929daa724112580f7a923dd';

// export const searchApi = (id: string) => 
// axios.get(`
//     https://api.themoviedb.org/3/search/multi`, {params: {
//     api_key: api_key, 
//     language: 'ko-KR'
// }});

export const searchApi = (query: string) => axiosInstance.get(`/search/multi?query=${query}`);
