// @flow
import { Slider } from "main/Home/Content/TabsContent/Projects/Slider";
import React from "react";
import "./index.less";

export const Projects = (): React$Node => {
    return (
        <div className="home-page-content-tabs-content-projects">
            <Slider />
        </div>
    );
};
