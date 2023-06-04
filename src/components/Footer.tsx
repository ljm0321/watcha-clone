import React, { useState } from "react";
import { Link } from "react-router-dom";
import {HiHome} from 'react-icons/hi';
import {BiSearch} from 'react-icons/bi';
import {FaUser} from 'react-icons/fa';
import '../styles/Footer.scss';

interface Props {
    activeIndex: number;
}

const Footer: React.FC<Props> = ({activeIndex}) => {
    const [activeTab, setActiveTab] = useState<number>(0);

    function tabHandler(index: number): void {
        setActiveTab(index);
    }
    
    return (
        <div className="Footer">
            <div className="footerWrapper">
                <Link 
                    className={
                        activeIndex === 0 ? "footer-item active" : "footer-item"
                    } 
                    to="/" onClick={() => tabHandler(activeIndex)}>
                    <HiHome className="footer-icon" />
                    <li>
                        홈
                    </li>
                </Link>
                <Link  
                    className={
                        activeIndex === 1 ? "footer-item active" : "footer-item"
                    } 
                    to="/search" onClick={() => tabHandler(activeIndex)}>
                    <BiSearch className="footer-icon" />
                    <li>
                        검색
                    </li>
                </Link>
                <Link 
                    className={
                        activeIndex === 2 ? "footer-item active" : "footer-item"
                    } 
                    to="/login" onClick={() => tabHandler(activeIndex)}>
                    <FaUser className="footer-icon" />
                    <li>
                        로그인
                    </li>
                </Link>
            </div>
        </div>
    )
};

export default Footer;