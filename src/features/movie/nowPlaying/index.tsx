import Card from "../../../components/Card";
import useNowPlaying from "./useNowPlayingMovie";
import Loading from './../../../components/Loading';

const NowPlayingMovie: React.FC = () => {
    const {data, isLoading} = useNowPlaying();

    return (
        <div className="Slider">
            <h3 className="title">박스오피스 순위</h3>
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
                        )).slice(0,30)
                    )
                }
            </div>
        </div>
    )
}

export default NowPlayingMovie;