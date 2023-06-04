import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, SearchKeyword} from '../../types';
import { searchApi } from "../../apis/searchApi";

const useSearch = (query: string) => {
    const queryFn = () => searchApi(query);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<SearchKeyword>>, AxiosError>(['searchWatcha', query], queryFn)
    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useSearch;