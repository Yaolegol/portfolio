// @flow
import cn from "classnames";
import { About } from "main/Home/Content/About";
import { Projects } from "main/Home/Content/Projects";
import React, { useCallback, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import "./index.less";

export const Content = (): React$Node => {
    const [contentId, setContentId] = useState("projects");

    const changeContent = useCallback(
        (id) => () => {
            setContentId(id);
        },
        []
    );

    const content = useMemo(() => {
        switch (contentId) {
            case "about":
                return <About />;
            case "projects":
                return <Projects />;
            default:
                return <About />;
        }
    }, [contentId]);

    return (
        <div className="main-page-content">
            <div className="main-page-content__tabs-container">
                <button
                    className={cn("main-page-content__tabs-button", {
                        "main-page-content__tabs-button_active":
                            contentId === "about",
                    })}
                    onClick={changeContent("about")}
                >
                    <div className="main-page-content__tab">
                        <img
                            alt="About me"
                            className="main-page-content__tab-icon"
                            src="images/people.png"
                        />
                        <div className="main-page-content__tab-description">
                            <FormattedMessage id="main.menu.about" />
                        </div>
                    </div>
                </button>
                <button
                    className={cn("main-page-content__tabs-button", {
                        "main-page-content__tabs-button_active":
                            contentId === "projects",
                    })}
                    onClick={changeContent("projects")}
                >
                    <div className="main-page-content__tab">
                        <img
                            alt="My projects"
                            className="main-page-content__tab-icon"
                            src="images/projects.png"
                        />
                        <div className="main-page-content__tab-description">
                            <FormattedMessage id="main.menu.projects" />
                        </div>
                    </div>
                </button>
            </div>
            <div className="main-page-content__content-section">{content}</div>
        </div>
    );
};
