import { detailApi } from "../../../apis/movieApi"
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { MovieDetail } from "../../../types";
import { AxiosError } from 'axios';

const useMovieDetail = (id: string) => {
    const queryFn = () => detailApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<MovieDetail> , AxiosError>(['movieDetail', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useMovieDetail;