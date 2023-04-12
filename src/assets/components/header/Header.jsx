import React, { useState } from "react";
import lucasIMG from "../../../assets/images/lucas.png";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
    const [menuRevealed, setMenuRevealed] = useState(false);
    const hamburgerHandleClick = () => {
        setMenuRevealed(!menuRevealed);
    }

    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container">
                    <div className="header__logo-img-cont">
                        <img src={lucasIMG} alt="Lucas Maxwell Tousignant Logo Image" className="header__logo-img" />
                    </div>
                    <span className="header__logo-sub">Lucas</span>
                </div>
                <div className="header__main">
                    <ul className="header__links">
                        <li className="header__link-wrapper">
                            <a href="./" className="header__link"> Home </a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="./#about" className="header__link">About </a>
                        </li>
                        <li className="header__link-wrapper">
                            <a href="./#projects" className="header__link"> Projects </a>
                        </li>
                    </ul>
                    <div className="header__main-ham-menu-cont">
                        <span className="header__main-ham-menu" onClick={hamburgerHandleClick}> {menuRevealed ? <AiOutlineClose /> : <RxHamburgerMenu />}  </span>
                    </div>
                </div>
            </div>
            <div className={`header__sm-menu${menuRevealed ? ' visible' : ''}`}>
                <div className="header__sm-menu-content">
                    <ul className="header__sm-menu-links">
                        <li className="header__sm-menu-link">
                            <a href="./"> Home </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#about"> About </a>
                        </li>

                        <li className="header__sm-menu-link">
                            <a href="./#projects"> Projects </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}

export default Header; 