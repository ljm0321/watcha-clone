import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, MovieDetail} from '../../../types';
import { topRatedApi } from "../../../apis/movieApi";

const useTopTenMovie = () => {
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topTenMovie', topRatedApi)

    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useTopTenMovie;