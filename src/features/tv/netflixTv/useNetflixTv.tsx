import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, TVDetail} from '../../../types';
import { popularApi } from "../../../apis/tvApi";

const useNetflixMovie = () => {
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('NetflixTv', popularApi)

    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useNetflixMovie;