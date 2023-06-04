import React from "react";
import useTvReview from "./useTvReview";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import Slider, {Settings} from 'react-slick';
import {AiFillStar} from 'react-icons/ai';
import {HiThumbUp} from 'react-icons/hi';
import {FaComment} from 'react-icons/fa';

type Params = {
    id: string;
}   

const DEFAULT_SETTINGS: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    variableWidth: true,
}

interface Props {
    settings?: Settings;
}

const TvReview: React.FC<Props> = ({settings = DEFAULT_SETTINGS}) => {
    const {id} = useParams<Params>();

    const {isLoading, data} = useTvReview(id ?? '');

    return (
        <>
            {
                isLoading || !data 
                ? (
                    <Loading />
                ) : (
                    <>
                        <h4 className="section-title">코멘트 {data.results.length}+<span>더보기</span></h4>
                        <Slider className="Review" {...settings}>
                            {data.results.map((result, index) => (
                            <div key={index} className="review-box">
                                <ul className="review-top">
                                    <li className="author">{result.author_details.name}</li>
                                    <li className="rating"><AiFillStar />&nbsp;{result.author_details.rating}</li>
                                </ul>
                                <li className="content">{result.content}</li>
                                <ul className="review-icon">
                                    <li className="icon"><HiThumbUp />136</li>
                                    <li className="icon"><FaComment />0</li>
                                </ul>
                                <li className="like">좋아요</li>
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

export default TvReview;