import Card from "../../../components/Card";
import useNetflixMovie from "./useNetflixMovie";
import Loading from '../../../components/Loading';

const NetflixMovie: React.FC = () => {
    const {data, isLoading} = useNetflixMovie();

    return (
        <div className="Slider">
            <h3 className="title">넷플릭스 영화 순위</h3>
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
                            badge={index + 1} />
                        )).slice(0,10)
                    )
                }
            </div>
        </div>
    )
}

export default NetflixMovie;