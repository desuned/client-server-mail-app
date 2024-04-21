import React from "react";
import {Link} from 'react-router-dom';
import '../styles/headers/Header.css';

function Header() {
    return (
        <ul className="headerList">
            <li className="headerElement">
                <Link to="/">Главная</Link>
            </li>
            <li className="headerElement">
                <Link to="/profile/">Профиль</Link>
            </li>
            <li className="headerElement">
                <Link to="/calender/">Календарь</Link>
            </li>
            <li className="headerElement">
                <Link to="/savedfiles/">Сохраненные файлы</Link>
            </li>
            <li className="headerElement">
                <Link to="/about/">О нас</Link>
            </li>           
        </ul>
    )
}

export default Header;