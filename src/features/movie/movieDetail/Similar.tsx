import React from "react";
import useMovieSimilar from "./useMovieSimilar";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import Card from "../../../components/Card";

type Params = {
    id: string;
}   

const MovieSimilar: React.FC = () => {
    const {id} = useParams<Params>();

    const {isLoading, data} = useMovieSimilar(id ?? "");

    return (
        <>
            {
                isLoading || !data 
                ? (
                    <Loading />
                ) : (
                    <>
                        <h4 className="section-title">비슷한 작품</h4>
                        <div className="Similar">
                            {data.results.map((movie) => (
                                <Card 
                                key={movie.id}
                                linkUrl={`/movie/${movie.id}`} 
                                title={movie.title} 
                                posterPath={movie.poster_path ? (
                                    `https://image.tmdb.org/t/p/w300/${movie.poster_path}`)
                                    : ('/assets/default.png')
                                } 
                                voteAverage={movie.vote_average} />
                            )).slice(0,12)}
                        </div>
                    </>
                )
            }
        </>
    )
}

export default MovieSimilar;