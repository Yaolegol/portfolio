// @flow
import aboutList from "config/about.json";
import { getRandomString } from "common/helpers/random";
import React, { useMemo } from "react";
import "./index.less";

export const About = (): React$Node => {
    const content = useMemo(() => {
        return aboutList.map(({ description, title }) => {
            const _description = description.map((des) => {
                return <div key={getRandomString()}>{des}</div>;
            });
            return (
                <div className="main-page-content-about__item" key={title}>
                    <div className="main-page-content-about__item-title">
                        <strong>{title}</strong>
                    </div>
                    <div className="main-page-content-about__item-description">
                        {_description}
                    </div>
                </div>
            );
        });
    }, []);

    return (
        <div className="main-page-content-about">
            {content}
        </div>
    );
};
