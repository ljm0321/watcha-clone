import { detailApi } from "../../../apis/tvApi"
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { TVDetail } from "../../../types";
import { AxiosError } from 'axios';

const useTvDetail = (id: string) => {
    const queryFn = () => detailApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<TVDetail> , AxiosError>(['tvDetail', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useTvDetail;