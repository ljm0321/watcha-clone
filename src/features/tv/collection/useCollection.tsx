import { useQuery } from "react-query";
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';
import { Collections } from "../../../types";

const useCollection = () => {
    const { isLoading, isError, data } = useQuery<AxiosResponse<Collections[]>, AxiosError>('collection', () => axios.get('http://localhost:3000/data/collection.json'))

    return {
        isLoading,
        isError,
        data: data?.data
    }
};

export default useCollection;
