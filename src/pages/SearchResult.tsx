import React from "react";
import Footer from "../components/Footer";
import SearchReults from "../features/search/searchResults";
import '../styles/SearchResult.scss';

const SearchResult: React.FC = () => {
    return (
        <div>
            <SearchReults />
            <Footer activeIndex={1} />
        </div>
    )
}

export default SearchResult;