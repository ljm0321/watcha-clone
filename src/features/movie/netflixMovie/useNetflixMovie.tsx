import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, MovieDetail} from '../../../types';
import { popularApi } from "../../../apis/movieApi";

const useNetflixMovie = () => {
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('NetflixMovie', popularApi)

    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useNetflixMovie;