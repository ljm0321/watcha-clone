import React from "react";
import MovieDetails from "../features/movie/movieDetail";
import "../styles/Detail.scss";
import Footer from "../components/Footer";

const MovieDetail: React.FC = () => {
    return (
        <div className="Detail">
            <MovieDetails />
            <Footer activeIndex={0} />
        </div>
    )
}

export default MovieDetail;