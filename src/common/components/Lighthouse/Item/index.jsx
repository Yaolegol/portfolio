// @flow
import React from "react";
import "./index.less";

type TProps = {
    description: string,
};

export const LightHouseItem = ({ description }: TProps): React$Node => {
    return (
        <div className="lighthouse-item">
            <div className="lighthouse-item__score">100</div>
            <div className="lighthouse-item__description">{description}</div>
        </div>
    );
};
