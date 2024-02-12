// @flow
import { selectCurrentLocale } from "modules/Locale/selectors";
import React from "react";
import { useSelector } from "react-redux";
import "./index.less";

export const SocialLinks = (): React$Node => {
    const currentLocale = useSelector(selectCurrentLocale);

    if (currentLocale === "ru") {
        return (
            <div className="home-page-header-social-links">
                <div className="home-page-header-social-links__socials-item">
                    <a
                        href="https://www.linkedin.com/in/oleg-oleinik-160160"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            alt="LinkedIn"
                            className="home-page-header-social-links__socials-icon"
                            src="/images/social/ln.png"
                        />
                    </a>
                </div>
                <div className="home-page-header-social-links__socials-item">
                    <a
                        href="https://vk.com/id41167330"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            alt="Vk"
                            className="home-page-header-social-links__socials-icon home-page-header-social-links__socials-icon_vk"
                            src="/icons/social/vk.svg"
                        />
                    </a>
                </div>
                <div className="home-page-header-social-links__socials-item">
                    <a
                        href="https://t.me/OlegOleinik"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <img
                            alt="Telegram"
                            className="home-page-header-social-links__socials-icon home-page-header-social-links__socials-icon_vk"
                            src="/icons/social/telegram.svg"
                        />
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="home-page-header-social-links">
            <div className="home-page-header-social-links__socials-item">
                <a
                    href="https://www.linkedin.com/in/oleg-oleinik-160160"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img
                        alt="LinkedIn"
                        className="home-page-header-social-links__socials-icon"
                        src="/images/social/ln.png"
                    />
                </a>
            </div>
        </div>
    );
};
