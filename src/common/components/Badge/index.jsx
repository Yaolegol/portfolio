// @flow
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
};

export const Badge = ({ children }: TProps): React$Node => {
    return <div className="badge">{children}</div>;
};
