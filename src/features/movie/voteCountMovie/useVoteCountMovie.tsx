import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, MovieDetail} from '../../../types';
import { voteCountApi } from "../../../apis/movieApi";

const useVoteCountMovie = (keyword: string) => {
    const queryFn = () => voteCountApi(keyword);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(['voteCountMovie', keyword], queryFn)
    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useVoteCountMovie;