import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NowPlayingMovie from './../features/movie/nowPlaying';
import "../styles/MainPage.scss";
import TopTenMovie from "../features/movie/topTenMovie";
import NetflixMovie from "../features/movie/netflixMovie";
import KeywordMovie from "../features/movie/keywordMovie";
import VoteCountMovie from "../features/movie/voteCountMovie";
import Collection from "../features/movie/collection";

const MainPage: React.FC = () => {
    return (
        <div className="MainPage Content">
            <Header activeIndex={0} />
            <NowPlayingMovie />
            <TopTenMovie />
            <NetflixMovie />
            <KeywordMovie />
            <VoteCountMovie />
            <Collection />
            <Footer activeIndex={0} />
        </div>
    )
}

export default MainPage;