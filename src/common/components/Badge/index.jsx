// @flow
import { stylesConcat } from "common/helpers/styles";
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
    blue?: boolean,
};

export const Badge = ({ children, blue }: TProps): React$Node => {
    return (
        <div className={stylesConcat(["badge", blue ? "badge_blue" : ""])}>
            {children}
        </div>
    );
};
