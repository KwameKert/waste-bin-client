import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Dashboard from "./../../pages/Dashboard";

const DefaultLayer = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <Navbar />
      <Switch>
        <Route path={`${path}/dashboard`} component={Dashboard} />
      </Switch>
    </>
  );
};

export default DefaultLayer;
