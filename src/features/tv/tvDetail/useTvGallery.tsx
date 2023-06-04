import { galleryApi } from "../../../apis/tvApi"
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { GalleryList, Posters } from "../../../types";
import { AxiosError } from 'axios';

const useTvGallery = (id: string) => {
    const queryFn = () => galleryApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<GalleryList<Posters>>, AxiosError>(['tvGallery', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useTvGallery;