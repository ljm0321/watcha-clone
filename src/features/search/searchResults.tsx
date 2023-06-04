import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {BsSearch} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai';

interface SearchList {
    id: number;
    poster_path: string;
    name: string;
    title: string;
    media_type: string;
    first_air_date: string;
    release_date: string;
}

interface Results {
    results: Array<SearchList>
}

interface Data {
    data: Results;
    searchKeyword: string;
}

interface State {
    state: Data;
}
const SearchReults: React.FC = () => {
    const {...results} = useLocation() as State;

    const [searchKeyword, setSearchKeyword] = useState<string>(results.state.searchKeyword);

    const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setSearchKeyword(e.target.value);
    }

    const handleClose = (): void => {
        setSearchKeyword('');
    }

    return (
        <div className="SearchResults">
            <div className="search-wrap">
                <ul>
                    <BsSearch className="icon-search" />
                    <input 
                    type="text" 
                    value={searchKeyword} 
                    onChange={handleKeyword} />
                    <AiFillCloseCircle className="icon-close" onClick={handleClose} />
                </ul>
                <p className="cancel" onClick={handleClose}>취소</p>
            </div>
            <div className="result-list">
                {results.state.data.results.map((result, index) => (
                    <Link key={index} to={
                        result.media_type === 'movie' ? (`/movie/${result.id}`) : (`/tv/${result.id}`)
                    }>
                        <ul>
                            <img src={result.poster_path ? (
                                    `https://image.tmdb.org/t/p/w300/${result.poster_path}`)
                                    : ('/assets/default.png')
                                } alt="index" />
                        </ul>
                        <li className="title">{result.name}{result.title}</li>
                        <li className="year">{result.media_type === 'movie' ? (`${result.release_date}`.split('-')[0]) : (`${result.first_air_date}`.split('-')[0])}</li>
                        <li className="type">{result.media_type === 'movie' ? ('영화') : ('TV 프로그램')}</li>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchReults;