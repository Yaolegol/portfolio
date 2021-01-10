// @flow
import { Layout } from "common/components/Layout";
import { About } from "pages/Main/components/About";
import React from "react";
import "./index.less";

const MainPage = (): React$Node => {
    return (
        <Layout>
            <div className="main-page">
                <About />
            </div>
        </Layout>
    );
};

export default MainPage;
