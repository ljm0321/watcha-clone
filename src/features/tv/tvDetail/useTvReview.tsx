import { reviewApi } from "../../../apis/tvApi"
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { ListResponse, Reviews } from "../../../types";
import { AxiosError } from 'axios';

const useTvReview = (id: string) => {
    const queryFn = () => reviewApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<Reviews>>, AxiosError>(['tvReview', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useTvReview;