// @flow
import { Tab } from "common/components/Tab";
import React from "react";
import "icons/profile.svg";
import "icons/projects.svg";
import "./index.less";

type TProps = {
    activeTab: string,
    onClick: (id: string) => void,
};

export const Tabs = ({ activeTab, onClick }: TProps): React$Node => {
    return (
        <div className="home-page-content-tabs">
            <div className="home-page-content-tabs__tab-item">
                <Tab
                    descriptionId="main.menu.about"
                    iconName="profile"
                    isActive={activeTab === "about"}
                    onClick={onClick}
                    tabId="about"
                />
            </div>
            <div className="home-page-content-tabs__tab-item">
                <Tab
                    descriptionId="main.menu.projects"
                    iconName="projects"
                    isActive={activeTab === "projects"}
                    onClick={onClick}
                    tabId="projects"
                />
            </div>
        </div>
    );
};
