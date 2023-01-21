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
                            src="/images/linkedin.svg"
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
                            className="home-page-header-social-links__socials-icon"
                            src="/images/vk.png"
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
                        src="/images/linkedin.svg"
                    />
                </a>
            </div>
        </div>
    );
};
