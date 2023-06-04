import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Header.scss';

interface Props {
    activeIndex: number;
}

const Header: React.FC<Props> = ({activeIndex}) => {
    const [activeNav, setActiveNav] = useState<number>(0);
    const [fixNav, setFixNav] = useState<boolean>(false);

    function navHandler(index: number): void {
        setActiveNav(index);
    }

    // useEffect(() => {
    //     document.getElementById("App")?.scrollTo(0, 0);
    // }, []);

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);

        return() => {
            document.addEventListener("scroll", handleScroll);
        }
    }, []);

    function handleScroll(): void {
        if (window.scrollY > 5) {
            setFixNav(true);
        } else {
            setFixNav(false);
        }
    }

    return (
        <div className="Header">
            <div className={
                fixNav === true ? "headerWrapper scrolled" : "headerWrapper"
            }>
                <Link 
                    className={
                        activeIndex === 0 ? "header-item active" : "header-item"
                    } 
                    to="/" onClick={() => navHandler(activeIndex)}>
                    <li>
                        영화
                    </li>
                </Link>
                <Link  
                    className={
                        activeIndex === 1 ? "header-item active" : "header-item"
                    } 
                    to="/tv" onClick={() => navHandler(activeIndex)}>
                    <li>
                        TV
                    </li>
                </Link>
                <Link 
                    className={
                        activeIndex === 2 ? "header-item active" : "header-item"
                    } 
                    to="/" onClick={() => navHandler(activeIndex)}>
                    <li>
                        책
                    </li>
                </Link>
                <Link 
                    className={
                        activeIndex === 2 ? "header-item active" : "header-item"
                    } 
                    to="/" onClick={() => navHandler(activeIndex)}>
                    <li>
                        웹툰
                    </li>
                </Link>
            </div>
        </div>
    )
};

export default Header;