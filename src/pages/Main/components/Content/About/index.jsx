// @flow
import aboutList from "config/about.json";
import { getRandomString } from "common/helpers/random";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const About = (): React$Node => {
    const content = useMemo(() => {
        return aboutList.map(({ description, title }) => {
            const _description = description.map((des) => {
                return (
                    <div key={getRandomString()}>
                        {description.length >= 2 ? "- " : null}
                        <FormattedMessage id={des} />
                    </div>
                );
            });
            return (
                <div className="main-page-content-about__item" key={title}>
                    <div className="main-page-content-about__item-title">
                        <strong>
                            <FormattedMessage id={title} />
                        </strong>
                    </div>
                    <div className="main-page-content-about__item-description">
                        {_description}
                    </div>
                </div>
            );
        });
    }, []);

    return <div className="main-page-content-about">{content}</div>;
};
