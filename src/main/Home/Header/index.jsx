// @flow
import { getWorkExperience } from "common/helpers/personalData";
import { Contacts } from "main/Home/Header/Contacts";
import { SocialLinks } from "main/Home/Header/SocialLinks";
import { LangSelect } from "modules/Locale/components/LangSelect";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const Header = (): React$Node => {
    return (
        <div className="home-page-header">
            <img
                alt="Avatar"
                className="home-page-header__photo"
                src="/images/avatar.webp"
            />
            <div className="home-page-header__lang-select-container">
                <LangSelect />
            </div>
            <div className="home-page-header__header-section">
                <h1>
                    <FormattedMessage id="main.name" />
                </h1>
                <div className="home-page-header__header-description">
                    <FormattedMessage id="main.profession" />
                </div>
                <div className="home-page-header__header-description-additional">
                    <FormattedMessage id="main.workExperience" />:{" "}
                    <span className="home-page-header__header-work-experience">
                        {getWorkExperience()}
                    </span>
                </div>
            </div>
            <div className="home-page-header__description-section">
                <FormattedMessage id="main.description" />
            </div>
            <div className="home-page-header__contacts-section">
                <Contacts />
            </div>
            <div className="home-page-header__socials-section">
                <SocialLinks />
            </div>
        </div>
    );
};
