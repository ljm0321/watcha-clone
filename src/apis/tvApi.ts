import axiosInstance from './index';
import axios from 'axios';

export const airingTodayApi = () => axiosInstance.get('/tv/airing_today');

export const onTheAirApi = () => axiosInstance.get('/tv/on_the_air');

export const popularApi = () => axiosInstance.get('/tv/popular');

export const topRatedApi = () => axiosInstance.get('/tv/top_rated');

const api_key = 'f02b13b19929daa724112580f7a923dd';
const url = 'https://api.themoviedb.org/3/discover/tv';

export const languageApi = (language?: string, keyword?: string) => 
axios.get(url, {params: {
    api_key: api_key, 
    with_original_language: language,
    sort_by: keyword
}});

export const voteCountApi = (keyword: string) => 
axios.get(url, {params: {
    api_key: api_key, 
    sort_by: keyword
}});

export const genreApi = (genreId: string, language?: string, year?:number ) => 
axios.get(url, {params: {
    api_key: api_key, 
    with_genres: genreId,
    with_original_language: language,
    first_air_date_year: year
}});

export const detailApi = (id: string) => axiosInstance.get(`/tv/${id}`);

export const similarApi = (id: string) => axiosInstance.get(`/tv/${id}/similar`);

export const reviewApi = (id: string) => 
axios.get(`https://api.themoviedb.org/3/tv/${id}/reviews`, {params: {
    api_key: api_key, 
}});

export const galleryApi = (id: string) => 
axios.get(`https://api.themoviedb.org/3/tv/${id}/images`, {params: {
    api_key: api_key, 
}});

