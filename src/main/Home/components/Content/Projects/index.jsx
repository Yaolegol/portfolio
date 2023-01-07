// @flow
import { Slider } from "main/Home/components/Content/Projects/Slider";
import React from "react";
import "./index.less";

export const Projects = (): React$Node => {
    return (
        <div className="main-page-content-projects">
            <Slider />
        </div>
    );
};
