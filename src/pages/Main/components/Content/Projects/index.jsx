// @flow
import { ProjectsSlider } from "pages/Main/components/Content/Projects/ProjectsSlider";
import React from "react";
import "./index.less";

export const Projects = (): React$Node => {
    return (
        <div className="main-page-content-projects">
            <ProjectsSlider />
        </div>
    );
};
