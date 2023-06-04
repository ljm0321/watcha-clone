import React from "react";
import useTvSimilar from "./useTvSimilar";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import Card from "../../../components/Card";

type Params = {
    id: string;
}   

const   TvSimilar: React.FC = () => {
    const {id} = useParams<Params>();

    const {isLoading, data} = useTvSimilar(id ?? "");

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
                            {data.results.map((tv) => (
                                <Card 
                                key={tv.id}
                                linkUrl={`/tv/${tv.id}`} 
                                title={tv.name} 
                                posterPath={tv.poster_path ? (
                                    `https://image.tmdb.org/t/p/w300/${tv.poster_path}`)
                                    : ('/assets/default.png')
                                } 
                                voteAverage={tv.vote_average} />
                            )).slice(0,12)}
                        </div>
                    </>
                )
            }
        </>
    )
}

export default TvSimilar;