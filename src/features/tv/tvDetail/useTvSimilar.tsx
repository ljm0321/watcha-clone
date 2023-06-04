import { similarApi } from "../../../apis/tvApi"
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { ListResponse, TVDetail } from "../../../types";
import { AxiosError } from 'axios';

const useTvSimilar = (id: string) => {
    const queryFn = () => similarApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['tvSimilar', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useTvSimilar;