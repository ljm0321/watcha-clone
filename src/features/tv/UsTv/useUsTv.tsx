import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, TVDetail} from '../../../types';
import { languageApi } from "../../../apis/tvApi";

const useUsTv = (language: string) => {
    const queryFn = () => languageApi(language);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['usTv', language], queryFn)
    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useUsTv;