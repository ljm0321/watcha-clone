import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, MovieDetail} from '../../../types';
import { keywordApi } from "../../../apis/movieApi";

const useKeywordMovie = (language: string, year: number) => {
    const queryFn = () => keywordApi(language, year);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(['keywordMovie', language, year], queryFn)
    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useKeywordMovie;