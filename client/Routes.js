import React from "react";
import { Route } from "react-router-dom";
import Loadable from "react-loadable";
import { Loading } from "./components/molecules";

const HomeLoadable = Loadable({
  loader: () =>
    import("./components/pages/home" /* webpackChunkName: 'page__home' */),
  loading: Loading
});

const SignUpLoadable = Loadable({
  loader: () =>
    import("./components/pages/some-page" /* webpackChunkName: 'page__sign-up' */),
  loading: Loading
});

const MatchesLoadable = Loadable({
  loader: () =>
    import("./components/pages/matches" /* webpackChunkName: 'page__matches' */),
  loading: Loading
});

const ProjectsLoadable = Loadable({
  loader: () =>
    import("./components/pages/some-page" /* webpackChunkName: 'page__projects' */),
  loading: Loading
});

const Routes = () => (
  <React.Fragment>
    <Route path="/" exact component={HomeLoadable} />
    <Route path="/sign-up/" component={SignUpLoadable} />
    <Route path="/matches/" component={MatchesLoadable} />
    <Route path="/projects/" component={ProjectsLoadable} />
  </React.Fragment>
);

export default Routes;
