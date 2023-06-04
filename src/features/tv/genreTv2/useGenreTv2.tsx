import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, TVDetail} from '../../../types';
import { genreApi } from "../../../apis/tvApi";

const useGenreTv2 = (genreId: string, language:string, year:number) => {
    const queryFn = () => genreApi(genreId, language, year);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['genreTv', genreId, language, year], queryFn)
    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useGenreTv2;