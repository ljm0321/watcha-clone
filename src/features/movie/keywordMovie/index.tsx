import Card from "../../../components/Card";
import useKeywordMovie from "./useKeywordMovie";
import Loading from '../../../components/Loading';
import {MdArrowForwardIos} from 'react-icons/md';

const KeywordMovie: React.FC = () => {
    const {data, isLoading} = useKeywordMovie('ko', 2022);

    return (
        <div className="Slider">
            <h3 className="title">
                <p className="title-sub">
                    CGV SVIP님의 컬렉션
                </p>
                2022 JIFF 국제경쟁+한국경쟁
            </h3>
            <span className="title-arrow"><MdArrowForwardIos /></span>
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

export default KeywordMovie;