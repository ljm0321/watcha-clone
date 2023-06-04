import Card from "../../../components/Card";
import useGenreTv from "./useGenreTv";
import Loading from '../../../components/Loading';
import {MdArrowForwardIos} from 'react-icons/md';

const GenreTv: React.FC = () => {
    const {data, isLoading} = useGenreTv('10765', 'ko');

    return (
        <div className="Slider">
            <h3 className="title">
                <p className="title-sub">
                    CGV SVIP님의 컬렉션
                </p>
                우리나라식 SF/ 판타지 영화/ 드라마
            </h3>
            <span className="title-arrow"><MdArrowForwardIos /></span>
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

export default GenreTv;