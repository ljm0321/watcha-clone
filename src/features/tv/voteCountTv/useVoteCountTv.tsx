import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import {ListResponse, TVDetail} from '../../../types';
import { voteCountApi } from "../../../apis/tvApi";

const useVoteCountTv = (keyword: string) => {
    const queryFn = () => voteCountApi(keyword);
    const { isLoading, isError, data } = useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>(['voteCountTv', keyword], queryFn)
    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useVoteCountTv;