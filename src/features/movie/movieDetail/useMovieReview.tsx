import { reviewApi } from "../../../apis/movieApi"
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { ListResponse, Reviews } from "../../../types";
import { AxiosError } from 'axios';

const useMovieReview = (id: string) => {
    const queryFn = () => reviewApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<Reviews>>, AxiosError>(['movieReview', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useMovieReview;