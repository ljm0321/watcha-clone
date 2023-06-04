import Card from "../../../components/Card";
import useVoteCountTv from "./useVoteCountTv";
import Loading from '../../../components/Loading';

const VoteCounttv: React.FC = () => {
    const {data, isLoading} = useVoteCountTv('vote_average.desc');

    return (
        <div className="Slider">
            <h3 className="title">평균별점이 높은 작품</h3>
            <div className="card-list">
                {
                    isLoading || !data ? (
                        <Loading />
                    ) : (
                        data.results.map((tv, index) => (
                            <Card 
                            key={tv.id}
                            linkUrl={`/tv/${tv.id}`} 
                            title={tv.name} 
                            posterPath={tv.poster_path ? (
                                `https://image.tmdb.org/t/p/w300/${tv.poster_path}`)
                                : ('/assets/default.png')
                            } 
                            voteAverage={tv.vote_average}
                            />
                        )).slice(0,10)
                    )
                }
            </div>
        </div>
    )
}

export default VoteCounttv;