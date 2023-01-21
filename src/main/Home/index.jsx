// @flow
import { Content } from "main/Home/Content";
import { Header } from "main/Home/Header";
import React from "react";
import "./index.less";

const Home = (): React$Node => {
    return (
        <div className="home-page">
            <Header />
            <div className="home-page__content-container">
                <Content />
            </div>
        </div>
    );
};

export default Home;
