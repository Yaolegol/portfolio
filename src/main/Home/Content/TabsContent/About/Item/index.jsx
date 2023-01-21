// @flow
import cn from "classnames";
import { getRandomString } from "common/helpers/random";
import React from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    descriptionDataList: Array<{
        description: string | React$Node,
        isBold?: boolean,
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
                    ({ description, isBold, useIntl = true }) => {
                        return (
                            <div
                                className={cn(
                                    "main-page-content-tabs-content-about-item__description",
                                    isBold ? "bold" : ""
                                )}
                                key={getRandomString()}
                            >
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
