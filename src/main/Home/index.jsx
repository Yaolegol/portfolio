// @flow
import { Layout } from "common/components/Layout";
import { Content } from "main/Home/components/Content";
import { Header } from "main/Home/components/Header";
import React from "react";
import "./index.less";

const Home = (): React$Node => {
    return (
        <Layout>
            <div className="main-page">
                <Header />
                <Content />
            </div>
        </Layout>
    );
};

export default Home;
