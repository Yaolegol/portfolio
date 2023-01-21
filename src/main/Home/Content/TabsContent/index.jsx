// @flow
import { About } from "main/Home/Content/TabsContent/About";
import { Projects } from "main/Home/Content/TabsContent/Projects";
import React from "react";

type TProps = {
    id: string,
};

export const TabsContent = ({ id }: TProps): React$Node => {
    switch (id) {
        case "about":
            return <About />;
        case "projects":
            return <Projects />;
        default:
            return <About />;
    }
};
