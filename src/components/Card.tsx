import React from "react";
import "../styles/Card.scss";
import { Link } from "react-router-dom";

interface Props {
    linkUrl: string;
    title: string;
    posterPath: string;
    voteAverage: number;
    badge?: number;
}


const Card: React.FC<Props> = ({linkUrl, title, posterPath, voteAverage, badge}) => {
    return (
        <Link to={linkUrl}>
            <div className="Card">
                <div className="card-image">
                    <img src={posterPath} alt={title} />
                    {badge ? (<span className="card-image__badge">{badge}</span>
                    ) : (null)}
                </div>
                <div className="card-detail">
                    <li className="card-detail__title">{title}</li>
                    <li className="card-detail__grade">
                        <span>평균</span>
                        <span>★</span>
                        <span className="grade-num">{voteAverage}</span>
                    </li>
                </div>
            </div>
        </Link>
    )
};

export default Card;