// @flow
import cn from "classnames";
import { About } from "main/Home/Content/About";
import { Projects } from "main/Home/Content/Projects";
import React, { useCallback, useMemo, useState } from "react";
import { FormattedMessage } from "react-intl";
import "icons/profile.svg";
import "icons/projects.svg";
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
        <div className="home-page-content">
            <div className="home-page-content__tabs-container">
                <button
                    className={cn("home-page-content__tabs-button", {
                        "home-page-content__tabs-button_active":
                            contentId === "about",
                    })}
                    onClick={changeContent("about")}
                >
                    <div className="home-page-content__tab">
                        <svg className="home-page-content__tab-icon">
                            <use href="/sprite.svg#profile" />
                        </svg>
                        <div className="home-page-content__tab-description">
                            <FormattedMessage id="main.menu.about" />
                        </div>
                    </div>
                </button>
                <button
                    className={cn("home-page-content__tabs-button", {
                        "home-page-content__tabs-button_active":
                            contentId === "projects",
                    })}
                    onClick={changeContent("projects")}
                >
                    <div className="home-page-content__tab">
                        <svg className="home-page-content__tab-icon">
                            <use href="/sprite.svg#projects" />
                        </svg>
                        <div className="home-page-content__tab-description">
                            <FormattedMessage id="main.menu.projects" />
                        </div>
                    </div>
                </button>
            </div>
            <div className="home-page-content__content-section">{content}</div>
        </div>
    );
};
