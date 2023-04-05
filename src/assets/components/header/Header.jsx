import React from "react";
import lucasIMG from "../../../assets/images/lucas.png";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo-container">
                    <div className="header__logo-img-cont">
                        <img src={lucasIMG} alt="Lucas Maxwell Tousignant Logo Image" className="header__logo-img" />
                    </div>
                    <span className="header__logo-sub">Lucas Maxwell Tousignant</span>
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
                        <li className="header__link-wrapper">
                            <a href="./#contact" className="header__link"> Contact </a>
                        </li>
                    </ul>
                    <div className="header__main-ham-menu-cont">
                        <img src="https://d33wubrfki0l68.cloudfront.net/79e75114856ae61628d2ad26504e3ff4ab2c71b6/f06a4/assets/svg/ham-menu.svg" alt="hamburger menu" className="header__main-ham-menu" />
                        <img src="https://d33wubrfki0l68.cloudfront.net/de2a681c8ca1630b29949b3a34bf158a686a0554/6a0ec/assets/svg/ham-menu-close.svg" alt="hamburger menu close" className="header__main-ham-menu-close d-none" />
                    </div>
                </div>
            </div>
            <div className="header__sm-menu">
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

                        <li className="header__sm-menu-link">
                            <a href="./#contact"> Contact </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}

export default Header; 