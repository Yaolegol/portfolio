// @flow
import { getRandomString } from "common/helpers/random";
import { stylesConcat } from "common/helpers/styles";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    descriptionDataList: Array<{
        description: string | React$Node,
        descriptionIntlPostfix?: string,
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
    const description = useMemo(() => {
        return descriptionDataList.map(
            ({
                description,
                descriptionIntlPostfix,
                isBold,
                title,
                useIntl = true,
            }) => {
                const descriptionTitle = title ? (
                    <span className="main-page-content-tabs-content-about-item__description-title">
                        <FormattedMessage id={title} />
                    </span>
                ) : null;

                const descriptionContent = useIntl ? (
                    <FormattedMessage id={description} />
                ) : (
                    description
                );

                const _descriptionIntlPostfix = descriptionIntlPostfix ? (
                    <FormattedMessage id={descriptionIntlPostfix} />
                ) : null;

                return (
                    <div
                        className={stylesConcat([
                            "main-page-content-tabs-content-about-item__description",
                            isBold ? "bold" : "",
                        ])}
                        key={getRandomString()}
                    >
                        <span>
                            {descriptionTitle} {descriptionContent}{" "}
                            {_descriptionIntlPostfix}
                        </span>
                    </div>
                );
            }
        );
    }, [descriptionDataList]);

    return (
        <div className="main-page-content-tabs-content-about-item">
            <div className="main-page-content-tabs-content-about-item__title-container">
                <FormattedMessage id={title} />
            </div>
            <div className="main-page-content-tabs-content-about-item__description-container">
                {description}
            </div>
        </div>
    );
};
