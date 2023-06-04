import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, MovieDetail} from '../../../types';
import { nowPlayingApi } from "../../../apis/movieApi";

const useNowPlaying = () => {
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('nowPlayingMovie', nowPlayingApi)

    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useNowPlaying;