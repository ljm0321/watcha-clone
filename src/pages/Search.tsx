import React from "react";
import Footer from "../components/Footer";
import SearchKeyword from "../features/search";
import '../styles/Search.scss';

const Search: React.FC = () => {
    return (
        <div className="Search">
            <SearchKeyword />
            <Footer activeIndex={1} />
        </div>
    )
}

export default Search;