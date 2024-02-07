// @flow
import { Badge } from "common/components/Badge";
import { getRandomString } from "common/helpers/random";
import { stylesConcat } from "common/helpers/styles";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    additionalInfo?: Array<any>,
    description: string,
    git: string,
    imgAlt: string,
    imgSrc: string,
    link: string,
    title: string,
};

export const CardProjectHeader = ({
    additionalInfo,
    description,
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
                        className={stylesConcat([
                            "card-project-header__additional-info-item",
                            isBold
                                ? "card-project-header__additional-info-item_bold"
                                : "",
                        ])}
                        key={getRandomString()}
                    >
                        <FormattedMessage id={message} />
                    </div>
                );
            });
        }
        return null;
    }, [additionalInfo]);

    return (
        <div className="card-project-header">
            <div className="card-project-header__image-container">
                <img
                    alt={imgAlt}
                    className="card-project-header__image"
                    src={imgSrc}
                />
            </div>
            <div className="card-project-header__badge-container">
                <Badge>
                    <FormattedMessage id="projects.common.lastUpdate" />
                </Badge>
            </div>
            <div className="card-project-header__open-project-link-container">
                {link ? (
                    <a
                        className="card-project-header__open-project-link"
                        href={link}
                        rel="nofollow noreferrer"
                        target="_blank"
                    >
                        <FormattedMessage id="projects.common.openProject.title" />
                    </a>
                ) : (
                    <span className="card-project-header__open-project-link disabled">
                        <FormattedMessage id="projects.common.currentProject.title" />
                    </span>
                )}
            </div>
            <div className="card-project-header__git-container">
                {
                    git === 'private'
                    ? null
                    :
                        (
                            <a href={git} rel="nofollow noreferrer" target="_blank">
                                <img
                                    alt="Github"
                                    className="card-project-header__git-icon"
                                    src="/icons/git/git.svg"
                                />
                                <div>
                                    <FormattedMessage id="projects.common.viewCode.title" />
                                </div>
                            </a>
                        )
                }
            </div>
            <div className="card-project-header__title-container">
                <h2>
                    <FormattedMessage id={title} />
                </h2>
                <div className="card-project-header__title-description">
                    <FormattedMessage id={description} />
                </div>
                {_additionalInfo ? (
                    <div className="card-project-header__additional-info-container">
                        {_additionalInfo}
                    </div>
                ) : null}
            </div>
        </div>
    );
};
