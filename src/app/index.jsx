// @flow
import { Layout } from "common/components/Layout";
import Home from "main/Home";
import React from "react";
import { hot } from "react-hot-loader/root";
import "./index.less";

const App = () => {
    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default hot(App);
