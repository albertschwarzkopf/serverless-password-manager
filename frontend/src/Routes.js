import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";
import NewPassword from "./containers/NewPassword";


//export default () =>
//  <Switch>
//    <Route path="/" exact component={Home} />
//    <Route path="/login" exact component={Login} />
//    { /* Finally, catch all unmatched routes */ }
//    <Route component={NotFound} />
//  </Switch>;

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path="/login" exact component={Login} props={childProps} />
    <AppliedRoute path="/password/new" exact component={NewPassword} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
