// @flow
import { Layout } from "common/components/Layout";
import { actionHideMobileMenu } from "modules/MobileMenu/actions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./index.less";

const MainPage = (): React$Node => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionHideMobileMenu());
    }, [dispatch]);

    return (
        <Layout>
            <div className="main-page">test</div>
        </Layout>
    );
};

export default MainPage;
