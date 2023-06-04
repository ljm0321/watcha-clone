import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, TVDetail} from '../../../types';
import { genreApi } from "../../../apis/tvApi";

const useGenreTv = (genreId: string, language?:string) => {
    const queryFn = () => genreApi(genreId, language);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['genreTv', genreId, language], queryFn)
    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useGenreTv;