import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovieDetail from "./useMovieDetail";
import {MdArrowBack} from 'react-icons/md';
import {BsShareFill} from 'react-icons/bs';
import {AiOutlinePlus, AiFillEye} from 'react-icons/ai';
import {RiPencilFill} from 'react-icons/ri';
import {FiMoreHorizontal} from 'react-icons/fi';
import Loading from "../../../components/Loading";
import {Rating} from '@mui/material';
import MovieReview from "./Review";
import MovieGallery from "./Gallery";
import MovieSimilar from "./Similar";

type Params = {
    id: string;
}   

const MovieDetails: React.FC = () => {
    const [topIcon, setTopIcon] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);

        return() => {
            document.addEventListener("scroll", handleScroll);
        }
    }, []);

    function handleScroll(): void {
        if (window.scrollY > 130) {
            setTopIcon(true);
        } else {
            setTopIcon(false);
        }
    }

    const {id} = useParams<Params>();

    const {isLoading, data} = useMovieDetail(id ?? '');

    const year = data?.release_date.split('-')[0] || '';

    const genres = data?.genres.map(genre => (genre.name)).join('-') || '';

    const runtimeHour = data?.runtime ? (Math.ceil(data.runtime/60)) : ('');

    const runtimeMinute = data?.runtime ? (Math.ceil(data.runtime/60)) : ('');

    const backdropImg = data?.poster_path ? `https://image.tmdb.org/t/p/w300/${data?.backdrop_path}` : '';

    const navigate = useNavigate();

    const clickBack = (): void => {
        navigate(-1);
    }

    return (
        <> 
            {
                isLoading || !data 
                ? (
                    <Loading />
                ) : (
                    <>
                        <div className="sectionTop">
                            <div className="detail-backdrop" style={{backgroundImage: `url(${backdropImg})`}}></div>
                            <MdArrowBack 
                            onClick={clickBack} 
                            className= {topIcon === true ? "icon-back scrolled" : "icon-back"}
                            />
                            <BsShareFill 
                            className= {topIcon === true ? "icon-share scrolled" : "icon-share"}
                            />
                            <div className="sectionTop-detail">
                                <div className="datail-img"><img src={data?.poster_path ? (
                                    `https://image.tmdb.org/t/p/w300/${data?.poster_path}`)
                                    : ('/assets/default.png')} alt={data?.title} />
                                </div>
                                <div className="detail-wrap">
                                    <li className="detail-title">{data?.title}</li>
                                    <ul>
                                        <li className="detail-year">{year}・</li>
                                        <li className="detail-genre">{genres}</li>
                                        <li className="detail-country">・{data?.original_language}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="sectionRating">
                            <ul className="rating-stars">
                                <li>평가하기</li>
                                <Rating />
                            </ul>
                            <li className="rating-line"></li>
                            <ul className="rating-list">
                                <li>
                                    <AiOutlinePlus />
                                    보고싶어요
                                </li>
                                <li>
                                    <RiPencilFill />
                                    코멘트
                                </li>
                                <li>
                                    <AiFillEye />
                                    보는중
                                </li>
                                <li>
                                    <FiMoreHorizontal />
                                    더보기
                                </li>
                            </ul>
                        </div>
                        <div className="sectionInfo">
                            <h4 className="section-title">기본 정보 <span>더보기</span></h4>
                            <ul className="info-wrap">
                                <li>{data.title}</li>*
                                <li>{year} · {genres}</li>
                                <li>{runtimeHour}시간 {runtimeMinute}분</li>
                                <li>{data.tagline}</li>
                            </ul>
                        </div>
                        <div className="sectionComment">
                            <MovieReview />
                        </div>
                        <div className="sectionGallery">
                            <MovieGallery />
                        </div>
                        <div className="sectionSimilar">
                            <MovieSimilar />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default MovieDetails;