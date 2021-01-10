// @flow
import { getRandomString } from "common/helpers/random";
import React, { useMemo } from "react";
import "./index.less";

type TProps = {
    description: string,
    features: Array<any>,
    git: string,
    imgAlt: string,
    imgSrc: string,
    title: string,
};

export const Slide = ({
    description,
    features,
    git,
    imgAlt,
    imgSrc,
    title,
}: TProps): React$Node => {
    const _features = useMemo(() => {
        return features.map(({ descriptionList, title }) => {
            const _description = descriptionList.map((description) => {
                return (
                    <div
                        className="project-slider-slide__description"
                        key={getRandomString()}
                    >
                        {description}
                    </div>
                );
            });
            return (
                <div
                    className="project-slider-slide__description-item"
                    key={title}
                >
                    <h6>{title}</h6>
                    {_description}
                </div>
            );
        });
    }, [features]);

    return (
        <div className="project-slider-slide">
            <img
                alt={imgAlt}
                className="project-slider-slide__image"
                src={imgSrc}
            />
            <div className="project-slider-slide__content-section">
                <div className="project-slider-slide__header-container">
                    <h2>{title}</h2>
                    <div>
                        <i>{description}</i>
                    </div>
                </div>
                <div className="project-slider-slide__description-container">
                    <h4>Особенности проекта</h4>
                    {_features}
                </div>
                <div className="project-slider-slide__git-container">
                    <a href={git} rel="nofollow noreferrer" target="_blank">
                        <img
                            alt="Github"
                            className="project-slider-slide__git-icon"
                            src="images/github.png"
                        />
                        <div>Посмотреть код</div>
                    </a>
                </div>
            </div>
        </div>
    );
};
