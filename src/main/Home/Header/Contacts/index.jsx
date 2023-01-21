// @flow
import contactsData from "config/contacts.json";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

const { email, phone } = contactsData;

export const Contacts = (): React$Node => {
    return (
        <div className="home-page-header-contacts">
            <div className="home-page-header-contacts__contacts-item">
                <a href={`tel:${phone}`}>
                    {<FormattedMessage id="main.phone" />}: {phone}
                </a>
            </div>
            <div className="home-page-header-contacts__contacts-item">
                <a href={`mailto:${email}`}>Email: {email}</a>
            </div>
        </div>
    );
};
