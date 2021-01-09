// @flow
import React, { Suspense } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const MainPage = React.lazy(() => import("pages/Main"));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div />}>
                <Switch>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
};

// TODO remove hot from prod
export default (hot(App): any);
