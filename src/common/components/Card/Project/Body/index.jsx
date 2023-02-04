// @flow
import { getRandomString } from "common/helpers/random";
import React, { useMemo } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

type TProps = {
    features: Array<any>,
};

export const CardProjectBody = ({ features }: TProps): React$Node => {
    const _features = useMemo(() => {
        return features.map(({ descriptionList, title }) => {
            const _description = descriptionList.map((description) => {
                return (
                    <div
                        className="card-project-body__description"
                        key={getRandomString()}
                    >
                        <FormattedMessage id={description} />
                    </div>
                );
            });

            return (
                <div
                    className="card-project-body__description-item"
                    key={getRandomString()}
                >
                    <h6>
                        <FormattedMessage id={title} />
                    </h6>
                    <div className="card-project-body__description-container">
                        {_description}
                    </div>
                </div>
            );
        });
    }, [features]);

    return <div className="card-project-body">{_features}</div>;
};
