import Card from "../../../components/Card";
import useTopTenTv from "./useTopTenTv";
import Loading from '../../../components/Loading';

const TopTenTv: React.FC = () => {
    const {data, isLoading} = useTopTenTv();

    return (
        <div className="Slider">
            <h3 className="title">왓챠 Top 10 TV 프로그램</h3>
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
                        )).slice(0,30)
                    )
                }
            </div>
        </div>
    )
}

export default TopTenTv;