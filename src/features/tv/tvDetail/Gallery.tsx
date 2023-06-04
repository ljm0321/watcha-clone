import React from "react";
import useTvGallery from "./useTvGallery";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import Slider, {Settings} from 'react-slick';

type Params = {
    id: string;
}   

const DEFAULT_SETTINGS: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipe: true,
    draggable: true,
    variableWidth: true,
}

interface Props {
    settings?: Settings;
}

const TvGallery: React.FC<Props> = ({settings = DEFAULT_SETTINGS}) => {
    const {id} = useParams<Params>();

    const {isLoading, data} = useTvGallery(id ?? '');

    return (
        <>
            {
                isLoading || !data 
                ? (
                    <Loading />
                ) : (
                    <>
                        <h4 className="section-title">갤러리</h4>
                        <Slider className="Gallery" {...settings}>
                            {data.posters.slice(0, 10).map((result, index) => (
                            <div key={index} className="gallery-box">
                                <img src={`https://image.tmdb.org/t/p/w500${result.file_path}`} alt="index" />
                            </div>
                            ))}
                        </Slider>
                        <p className="line"></p>
                    </>
                )
            }
        </>
    )
}

export default TvGallery;