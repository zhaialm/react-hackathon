import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="navbar__left">
                            <div className="logo">
                                <p>Documentation</p>
                            </div>
                        </div>
                        <div className="navbar__right">
                            <ul className="navbar__menu">
                                <a href="./index.html">
                                    <li className="navbar__item">Главная</li>
                                </a>
                                <a href="./2documentation/index.html">
                                    <li className="navbar__item">
                                        Документация
                                    </li>
                                </a>
                                <li className="navbar__item">Добавить</li>
                            </ul>
                            <input type="text" placeholder="Поиск" />
                            <ul>
                                <a href="https://github.com/">
                                    <li className="navbar__item">Github</li>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__welcome">
                <h1 className="header__welcome-tittle">
                    <span className="color_text">JavaScript</span>
                    {/* <span>Script</span> */}
                </h1>
                <div className="header__input">
                    <a href="./2documentation/index.html">
                        <input
                            className="tittle"
                            type="text"
                            placeholder="Перейти к документации"
                        />
                    </a>
                </div>
            </div>
            <div className="first__section-tittle">

            </div>
        </>
    );
};

export default Header;