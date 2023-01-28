// @flow
import { Tabs } from "main/Home/Content/Tabs";
import { TabsContent } from "main/Home/Content/TabsContent";
import React, { useCallback, useState } from "react";
import "icons/profile.svg";
import "icons/projects.svg";
import "./index.less";

export const Content = (): React$Node => {
    const [tabId, setTabId] = useState("projects");

    const onTabClick = useCallback((id: string) => {
        setTabId(id);
    }, []);

    return (
        <div className="home-page-content">
            <div className="home-page-content__tabs-container">
                <Tabs activeTab={tabId} onClick={onTabClick} />
            </div>
            <div className="home-page-content__content-section">
                <TabsContent id={tabId} />
            </div>
        </div>
    );
};
