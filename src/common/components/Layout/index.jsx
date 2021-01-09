// @flow
import MobileMenu from "modules/MobileMenu/components/MobileMenu";
import React from "react";
import "./index.less";

type TProps = {
    children: React$Node,
};

export const Layout = ({ children }: TProps): React$Node => {
    return (
        <div className="layout">
            <MobileMenu />
            <div className={"layout__content"}>
                <div className={"layout__children-container"}>{children}</div>
            </div>
        </div>
    );
};
