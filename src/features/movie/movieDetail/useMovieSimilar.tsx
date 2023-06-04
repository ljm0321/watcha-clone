import { similarApi } from "../../../apis/movieApi"
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { ListResponse, MovieDetail } from "../../../types";
import { AxiosError } from 'axios';

const useMovieSimilar = (id: string) => {
    const queryFn = () => similarApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(['movieSimilar', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useMovieSimilar;