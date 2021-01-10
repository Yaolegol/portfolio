// @flow
import { Layout } from "common/components/Layout";
import { Header } from "pages/Main/components/Header";
import { Content } from "pages/Main/components/Content";
import React from "react";
import "./index.less";

const MainPage = (): React$Node => {
    return (
        <Layout>
            <div className="main-page">
                <Header />
                <Content />
            </div>
        </Layout>
    );
};

export default MainPage;
