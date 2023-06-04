import axios from 'axios';
import axiosInstance from './index';

export const nowPlayingApi = () => axiosInstance.get('/movie/now_playing');

export const topRatedApi = () => axiosInstance.get('/movie/top_rated');

export const popularApi = () => axiosInstance.get('/movie/popular');

const api_key = 'f02b13b19929daa724112580f7a923dd';
const url = 'https://api.themoviedb.org/3/discover/movie';

export const keywordApi = (language: string, year:number ) => 
axios.get(url, {params: {
    api_key: api_key, 
    with_original_language: language,
    first_air_date_year: year
}});

export const voteCountApi = (keyword: string) => 
axios.get(url, {params: {
    api_key: api_key, 
    sort_by: keyword
}});

export const detailApi = (id: string) => axiosInstance.get(`/movie/${id}`);

export const similarApi = (id: string) => axiosInstance.get(`/movie/${id}/similar`);

export const reviewApi = (id: string) => 
axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, {params: {
    api_key: api_key, 
}});

export const galleryApi = (id: string) => 
axios.get(`https://api.themoviedb.org/3/movie/${id}/images`, {params: {
    api_key: api_key, 
}});

