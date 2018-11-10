import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Login from "./components/Login";
import NotFound from "./components/404";
import Base from "./components/base";

const Router = () => (
  <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/not-found" component={NotFound}/>
    <Route path="/" exact component={Base}/>
    <Redirect from="*" to="/not-found"/>
  </Switch>
);

export default Router;
