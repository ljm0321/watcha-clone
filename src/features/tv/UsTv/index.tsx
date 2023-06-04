import Card from "../../../components/Card";
import useUsTv from "./useUsTv";
import Loading from '../../../components/Loading';

const UsTv: React.FC = () => {
    const {data, isLoading} = useUsTv('en');

    return (
        <div className="Slider">
            <h3 className="title">미국 TV 프로그램 인기 순위</h3>
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
                            badge={index+1}
                            />
                        )).slice(0,10)
                    )
                }
            </div>
        </div>
    )
}

export default UsTv;