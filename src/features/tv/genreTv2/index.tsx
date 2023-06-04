import Card from "../../../components/Card";
import useGenreTv2 from "./useGenreTv2";
import Loading from '../../../components/Loading';

const GenreTv2: React.FC = () => {
    const {data, isLoading} = useGenreTv2('35,18', 'ko', 2010);

    return (
        <div className="Slider">
            <h3 className="title">#코미디 #2010년대</h3>
            <div className="card-list">
                {
                    isLoading || !data ? (
                        <Loading />
                    ) : (
                        data.results.map((tv, index) => (
                            <Card 
                            key={tv.id}
                            linkUrl={`/tv/${tv.id}`} 
                            title={tv.original_name} 
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

export default GenreTv2;