import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, TVDetail} from '../../../types';
import { topRatedApi } from "../../../apis/tvApi";

const useTopTenTv = () => {
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('topTenTv', topRatedApi)

    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useTopTenTv;