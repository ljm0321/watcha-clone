import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TopTenTv from "../features/tv/topTenTv";
import KoreaTv from "../features/tv/koreaTv";
import UsTv from "../features/tv/UsTv";
import Netflixtv from "../features/tv/netflixTv";
import VoteCounttv from "../features/tv/voteCountTv";
import GenreTv from "../features/tv/genreTv";
import GenreTv2 from "../features/tv/genreTv2";
import Collection from "../features/tv/collection";

const TvPage: React.FC = () => {
    return (
        <div className="TvMain Content">
            <Header activeIndex={1} />
            <KoreaTv />
            <TopTenTv />
            <UsTv />
            <Netflixtv />
            <VoteCounttv />
            <GenreTv2 />
            <GenreTv />
            <Collection />
            <Footer activeIndex={0} />
        </div>
    )
}

export default TvPage;