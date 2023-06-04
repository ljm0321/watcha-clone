import Card from "../../../components/Card";
import useVoteCountMovie from "./useVoteCountMovie";
import Loading from '../../../components/Loading';

const VoteCountMovie: React.FC = () => {
    const {data, isLoading} = useVoteCountMovie('vote_count.desc');

    return (
        <div className="Slider">
            <h3 className="title">평균별점이 높은 작품</h3>
            <div className="card-list">
                {
                    isLoading || !data ? (
                        <Loading />
                    ) : (
                        data.results.map((movie, index) => (
                            <Card 
                            key={movie.id}
                            linkUrl={`/movie/${movie.id}`} 
                            title={movie.title} 
                            posterPath={movie.poster_path ? (
                                `https://image.tmdb.org/t/p/w300/${movie.poster_path}`)
                                : ('/assets/default.png')
                            } 
                            voteAverage={movie.vote_average}
                            />
                        )).slice(0,10)
                    )
                }
            </div>
        </div>
    )
}

export default VoteCountMovie;