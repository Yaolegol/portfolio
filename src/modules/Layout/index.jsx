// @flow
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
};

export const Layout = ({ children }: TProps): React$Node => {
    return <div className="layout">{children}</div>;
};
