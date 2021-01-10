// @flow
import React from "react";
import "./index.less";

type TProps = {
    buttonText?: string,
    description: string,
    imgAlt: string,
    imgSrc: string,
    onClick?: () => void,
    title: string,
};

export const Slide = ({
    description,
    imgAlt,
    imgSrc,
    onClick,
    title,
}: TProps): React$Node => {
    return (
        <div className="project-slider-slide">
            <div className="project-slider-slide__image-section">
                <img
                    className="project-slider-slide__image"
                    src={imgSrc}
                    alt={imgAlt}
                />
            </div>
            <div className="project-slider-slide__content-section">
                <div className="project-slider-slide__content">
                    <h1 className="project-slider-slide__content-header">
                        {title}
                    </h1>
                    <p className="project-slider-slide__content-description">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
