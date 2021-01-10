// @flow
import React from "react";
import "./index.less";

type TProps = {
    description: string,
    imgAlt: string,
    imgSrc: string,
    title: string,
};

export const Slide = ({
    description,
    imgAlt,
    imgSrc,
    title,
}: TProps): React$Node => {
    return (
        <div className="project-slider-slide">
            <img
                alt={imgAlt}
                className="project-slider-slide__image"
                src={imgSrc}
            />
            <div className="project-slider-slide__content-section">
                <div className="project-slider-slide__header-container">
                    <h2>Concrete</h2>
                    <div>
                        <i>(online store)</i>
                    </div>
                </div>
                <div className="project-slider-slide__description-container">
                    <h4>Особенности проекта</h4>
                    <div className="project-slider-slide__description-item">
                        <h6>Особенность</h6>
                        <div className="project-slider-slide__description">
                            test
                        </div>
                        <div className="project-slider-slide__description">
                            test
                        </div>
                        <div className="project-slider-slide__description">
                            test
                        </div>
                    </div>
                </div>
                <div className="project-slider-slide__git-container">
                    <a
                        href="https://veltry.herokuapp.com/"
                        rel="nofollow noreferrer"
                        target="_blank"
                    >
                        <img
                            alt="Github"
                            className="project-slider-slide__git-icon"
                            src="images/github.png"
                        />
                        <div>
                            Посмотреть код
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};
