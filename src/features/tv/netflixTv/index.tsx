import Card from "../../../components/Card";
import useNetflixTv from "./useNetflixTv";
import Loading from '../../../components/Loading';

const Netflixtv: React.FC = () => {
    const {data, isLoading} = useNetflixTv();

    return (
        <div className="Slider">
            <h3 className="title">넷플릭스 TV 프로그램 순위</h3>
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
                            badge={index + 1} />
                        )).slice(0,10)
                    )
                }
            </div>
        </div>
    )
}

export default Netflixtv;