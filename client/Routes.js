import React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import { Loading } from "./components/molecules";

const HomeLoadable = Loadable({
  loader: () =>
    import("./components/pages/home" /* webpackChunkName: 'page__home' */),
  loading: Loading
});

const TabsLoadable = Loadable({
  loader: () =>
    import("./components/pages/tabs" /* webpackChunkName: 'page__tabs' */),
  loading: Loading
});

const SomePageLoadable = Loadable({
  loader: () =>
    import("./components/pages/some-page" /* webpackChunkName: 'page__some-page' */),
  loading: Loading
});

const Routes = () => (
  <React.Fragment>
    <Route path="/" exact component={HomeLoadable} />
    <Route path="/tabs/" component={TabsLoadable} />
    <Route path="/some-page/" component={SomePageLoadable} />
  </React.Fragment>
);

export default Routes;
