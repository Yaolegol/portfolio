// @flow
import { Layout } from "modules/Layout";
import { actionSetLocale } from "modules/Locale/actions";
import Home from "main/Home";
import React, { useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { useDispatch } from "react-redux";
import "./index.less";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.navigator.language === "ru-RU") {
            dispatch(actionSetLocale("ru"));
        }
    }, [dispatch]);

    return (
        <Layout>
            <Home />
        </Layout>
    );
};

export default hot(App);
