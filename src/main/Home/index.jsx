// @flow
import { Content } from "main/Home/Content";
import { Header } from "main/Home/Header";
import React from "react";
import "./index.less";

const Home = (): React$Node => {
    return (
        <div className="main-page">
            <Header />
            <Content />
        </div>
    );
};

export default Home;
