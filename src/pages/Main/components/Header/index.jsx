// @flow
import React from "react";
import "./index.less";

export const Header = (): React$Node => {
    return (
        <div className="main-page-header">
            <img
                alt="Avatar"
                className="main-page-header__photo"
                src="images/avatar.jpg"
            />
            <div className="main-page-header__header-section">
                <h1>Олег Олейник</h1>
                <div className="main-page-header__header-description">
                    Frontend developer
                </div>
            </div>
            <div className="main-page-header__description-section">
                На этом сайте Вы можете посмотреть мои проекты, а также основную
                информацию обо мне как о frontend разработчике
            </div>
            <div className="main-page-header__contacts-section">
                <div className="main-page-header__contacts-item">
                    <b>
                        <a href="tel:+79069473139">Сот.телефон: +79069473139</a>
                    </b>
                </div>
                <div className="main-page-header__contacts-item">
                    <b>
                        <a href="mailto:m160160@yandex.ru">
                            Email: m160160@yandex.ru
                        </a>
                    </b>
                </div>
            </div>
            <div className="main-page-header__socials-section">
                <div className="main-page-header__socials-item">
                    <a
                        href="https://vk.com/id41167330"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            alt="Vk"
                            className="main-page-header__socials-icon"
                            src="images/vk.png"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};