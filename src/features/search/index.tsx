import React, { useState } from "react";
import useSearch from "./useSearch";
import {BsSearch} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai';
import { Link, useNavigate } from "react-router-dom";

const SearchKeyword: React.FC = () => {
    const [searchKeyword, setSearchKeyword] = useState<string>('');

    const {data} = useSearch(searchKeyword);

    const handleKeyword = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setSearchKeyword(e.target.value);
    }

    const handleClose = (): void => {
        setSearchKeyword('');
    }

    const navigate = useNavigate();

    function handleOnKeyDown(e: React.KeyboardEvent<HTMLInputElement>): void  {
        if (e.key === 'Enter') {
            navigate('/searchResult', {state: {data: data, searchKeyword: searchKeyword}});
        }
    }

    return (
        <>
            <div className="search-wrap">
                <ul>
                    <BsSearch className="icon-search" />
                    <input 
                    type="text" 
                    value={searchKeyword} 
                    onChange={handleKeyword}
                    onKeyDown={handleOnKeyDown} />
                    <AiFillCloseCircle className="icon-close" onClick={handleClose} />
                </ul>
                <p className="cancel" onClick={handleClose}>취소</p>
            </div>
                {
                    data?.results.length === 0 ? 
                    (
                        <div className="popular-search middle">
                            <h4>인기 검색어</h4>
                            <ul>
                                <Link to='/movie/447365'><li>가디언즈 오브 갤럭시: Volume 3</li></Link>
                                <Link to='/movie/603692'><li>존 윅 4</li></Link>
                                <Link to='/movie/299534'><li>어벤져스: 엔드게임</li></Link>
                                <Link to='/movie/68721'><li>아이언맨 3</li></Link>
                                <Link to='/movie/493529'><li>던전 앤 드래곤: 도적들의 명예</li></Link>
                            </ul>
                        </div>
                    ) : 
                    (
                        <div className="search-result middle">
                        <h4>연관 검색어</h4>
                            <ul>
                                {data?.results.map((result, index) => (
                                    <Link key={index} to={
                                        result.media_type === 'movie' ? (`/movie/${result.id}`) : (`/tv/${result.id}`)
                                    }>
                                        <li>{result.name}{result.title}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    )
                }
        </>
    )
}

export default SearchKeyword;