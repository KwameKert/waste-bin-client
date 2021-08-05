import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "./../Navbar";

const Main = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div id="wrapper" className={isMobile ? "d-flex toggled" : "d-flex"}>
      <Sidebar />
      <div id="page-content-wrapper">
        <Navbar onToggle={handleToggleMobile} />
        <div id="page-content-wrapper">
          <div className="container-fluid "></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
