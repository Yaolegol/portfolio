// @flow
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
};

export const Layout = ({ children }: TProps): React$Node => {
    return (
        <div className="layout">
            <div className="layout__content">
                <div className="layout__children-container">{children}</div>
            </div>
        </div>
    );
};
