import React from "react";
import "../styles/Detail.scss";
import Footer from "../components/Footer";
import TvDetails from "../features/tv/tvDetail";

const TvDetail: React.FC = () => {
    return (
        <div className="Detail">
            <TvDetails />
            <Footer activeIndex={0} />
        </div>
    )
}

export default TvDetail;