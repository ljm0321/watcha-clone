import Card from "../../../components/Card";
import useTopTenMovie from "./useTopTenMovie";
import Loading from '../../../components/Loading';

const TopTenMovie: React.FC = () => {
    const {data, isLoading} = useTopTenMovie();

    return (
        <div className="Slider">
            <h3 className="title">왓챠 Top 10 영화</h3>
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

export default TopTenMovie;