import React from "react";
import {Link} from 'react-router-dom';
import '../../styles/headers/Header.css';
import AddButton from "../buttons/AddButton";

function Header() {
    return (
        <div className="header-list-container">       
            <ul className="header-list">
                <li className="header-element">
                    <Link to="/main">Главная</Link>
                </li>
                <li className="header-element">
                    <Link to="/profile/">Профиль</Link>
                </li>
                <li className="header-element">
                    <Link to="/about/">О нас</Link>
                </li>           
            </ul>
            <div className="header-unauthorize-button-container">
                <AddButton className="header-unauthorize-button" name="Выйти из аккаунта"></AddButton>
            </div>
        </div>

    )
}

export default Header;