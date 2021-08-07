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
} from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const routes = [
    { name: "Dashboard", path: "/dashboard", icon: faChartPie },
    {
      name: "Users",
      path: "#",
      id: "dashMenu",
      icon: faUser,
      children: [
        { name: "Active Users", path: "/users/active", icon: faToggleOn },
        { name: "Inactive Users", path: "/users/inactive", icon: faToggleOff },
      ],
    },
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
              <Route path="/" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
