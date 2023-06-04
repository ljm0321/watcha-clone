import { galleryApi } from "../../../apis/movieApi"
import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';
import { GalleryList, Posters } from "../../../types";
import { AxiosError } from 'axios';

const useMovieGallery = (id: string) => {
    const queryFn = () => galleryApi(id);
    const { isLoading, isError, data } = useQuery<AxiosResponse<GalleryList<Posters>>, AxiosError>(['movieGallery', id], queryFn);

    return {
        isLoading,
        isError,
        data: data?.data
    }
}

export default useMovieGallery;