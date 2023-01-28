// @flow
import { getRandomString } from "common/helpers/random";
import { stylesConcat } from "common/helpers/styles";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    descriptionDataList: Array<{
        description: string | React$Node,
        isBold?: boolean,
        title?: string,
        useIntl?: boolean,
    }>,
    title: string,
};

export const AboutItem = ({
    descriptionDataList,
    title,
}: TProps): React$Node => {
    return (
        <div className="main-page-content-tabs-content-about-item">
            <div className="main-page-content-tabs-content-about-item__title-container">
                <FormattedMessage id={title} />
            </div>
            <div className="main-page-content-tabs-content-about-item__description-container">
                {descriptionDataList.map(
                    ({ description, isBold, title, useIntl = true }) => {
                        return (
                            <div
                                className={stylesConcat([
                                    "main-page-content-tabs-content-about-item__description",
                                    isBold ? "bold" : "",
                                ])}
                                key={getRandomString()}
                            >
                                {title ? (
                                    <span className="main-page-content-tabs-content-about-item__description-title">
                                        <FormattedMessage id={title} />
                                    </span>
                                ) : (
                                    ""
                                )}
                                {useIntl ? (
                                    <FormattedMessage id={description} />
                                ) : (
                                    description
                                )}
                            </div>
                        );
                    }
                )}
            </div>
        </div>
    );
};
