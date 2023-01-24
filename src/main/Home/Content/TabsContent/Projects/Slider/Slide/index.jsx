// @flow
import { getRandomString } from "common/helpers/random";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    additionalInfo?: Array<any>,
    description: string,
    features: Array<any>,
    git: string,
    imgAlt: string,
    imgSrc: string,
    link: string,
    title: string,
};

export const Slide = ({
    additionalInfo,
    description,
    features,
    git,
    imgAlt,
    imgSrc,
    link,
    title,
}: TProps): React$Node => {
    const _additionalInfo = useMemo(() => {
        if (additionalInfo) {
            return additionalInfo.map(({ isBold, message }) => {
                return (
                    <div
                        className="project-slider-slide__additional-info-item"
                        key={getRandomString()}
                    >
                        {isBold ? (
                            <b>
                                <FormattedMessage id={message} />
                            </b>
                        ) : (
                            <FormattedMessage id={message} />
                        )}
                    </div>
                );
            });
        }
        return null;
    }, [additionalInfo]);

    const _features = useMemo(() => {
        return features.map(({ descriptionList, title }) => {
            const _description = descriptionList.map((description) => {
                return (
                    <div
                        className="project-slider-slide__description"
                        key={getRandomString()}
                    >
                        <FormattedMessage id={description} />
                    </div>
                );
            });
            return (
                <div
                    className="project-slider-slide__description-item"
                    key={getRandomString()}
                >
                    <h4>
                        <FormattedMessage id={title} />
                    </h4>
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
                    <h2>
                        <FormattedMessage id={title} />
                    </h2>
                    <div>
                        <i>
                            <FormattedMessage id={description} />
                        </i>
                    </div>
                </div>
                {_additionalInfo}
                <div className="project-slider-slide__description-container">
                    {_features}
                </div>
                {link ? (
                    <div className="project-slider-slide__project-link-container">
                        <a
                            href={link}
                            rel="nofollow noreferrer"
                            target="_blank"
                        >
                            <img
                                alt="Github"
                                className="project-slider-slide__project-icon"
                                src={imgSrc}
                            />
                            <h5>
                                <FormattedMessage id="projects.common.openProject.title" />
                            </h5>
                        </a>
                    </div>
                ) : null}
                <div className="project-slider-slide__git-container">
                    <a href={git} rel="nofollow noreferrer" target="_blank">
                        <img
                            alt="Github"
                            className="project-slider-slide__git-icon"
                            src="/icons/git/git.svg"
                        />
                        <h5>
                            <FormattedMessage id="projects.common.viewCode.title" />
                        </h5>
                    </a>
                </div>
            </div>
        </div>
    );
};
