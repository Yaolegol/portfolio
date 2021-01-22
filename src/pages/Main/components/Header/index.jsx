// @flow
import contactsData from "config/contacts.json";
import { LangSelect } from "modules/Locale/components/LangSelect";
import { selectCurrentLocale } from "modules/Locale/selectors";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import "./index.less";

const { email, phone } = contactsData;

export const Header = (): React$Node => {
    const currentLocale = useSelector(selectCurrentLocale);

    const socialLinks = useMemo(() => {
        if (currentLocale === "ru") {
            return (
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
            );
        }
        return (
            <div className="main-page-header__socials-item">
                <a
                    href="https://www.linkedin.com/in/oleg-oleinik-160160"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img
                        alt="LinkedIn"
                        className="main-page-header__socials-icon"
                        src="images/linkedin.svg"
                    />
                </a>
            </div>
        )
    }, [currentLocale]);

    return (
        <div className="main-page-header">
            <img
                alt="Avatar"
                className="main-page-header__photo"
                src="images/avatar.jpg"
            />
            <div className="main-page-header__lang-select-container">
                <LangSelect />
            </div>
            <div className="main-page-header__header-section">
                <h1>
                    <FormattedMessage id="main.name" />
                </h1>
                <div className="main-page-header__header-description">
                    <FormattedMessage id="main.profession" />
                </div>
            </div>
            <div className="main-page-header__description-section">
                <FormattedMessage id="main.description" />
            </div>
            <div className="main-page-header__contacts-section">
                <div className="main-page-header__contacts-item">
                    <b>
                        <a href={`tel:${phone}`}>
                            {<FormattedMessage id="main.phone" />}: {phone}
                        </a>
                    </b>
                </div>
                <div className="main-page-header__contacts-item">
                    <b>
                        <a href={`mailto:${email}`}>Email: {email}</a>
                    </b>
                </div>
            </div>
            <div className="main-page-header__socials-section">
                {socialLinks}
            </div>
        </div>
    );
};
