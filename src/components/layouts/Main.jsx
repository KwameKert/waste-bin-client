import React, { useState } from "react";
import Sidebar from "../Sidebar";
import { Switch, Route } from "react-router-dom";
import Navbar from "./../Navbar";
import Dashboard from "./../../pages/Dashboard";
import {

  faChartPie,
  faUser,
  faToggleOff,
  faToggleOn,
  faTrashAlt
} from "@fortawesome/free-solid-svg-icons";
import Bin from './../../modules/Bins/Bins';
import BinDetail from './../../modules/Bins/BinDetail';
const Main = () => {
  const routes = [
    { name: "Dashboard", path: "/app/dashboard", icon: faChartPie },
    { name: "Bins", path: "/app/bins", icon: faTrashAlt }
  ];
  const [isFullWidth, setFullWidth] = useState(false);

  const handleToggle = () => {
    setFullWidth(!isFullWidth);
  };

  return (
    <div id="wrapper" className={isFullWidth ? "d-flex toggled" : "d-flex"}>
      <Sidebar routes={routes} />
      <div id="page-content-wrapper">
        <Navbar onToggle={handleToggle} />
        <div id="page-content-wrapper">
          <div className="container-fluid ">
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/bins" component={Bin} />
              <Route path="/app/binDetail" component={BinDetail} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
