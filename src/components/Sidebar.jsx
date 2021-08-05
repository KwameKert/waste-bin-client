import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="bg-light border-right " id="sidebar-wrapper">
        <h4 className="text-center py-3">The Ambassador</h4>
       
        {/* <div className="row ">
          <div className="col-md-6 ">
            <img
              src="/assets/img/blue.jpg"
              alt="plant admin"
              className="rounded-circle"
              width="100px"
              height="100px"
            />
            <b className="text-bold ml-1">Administrator</b>
          </div>
        </div> */}

        <div className="list-group list-group-flush mt-4">
          <Link
            className="list-group-item list-group-item-action bg-light"
            to="/dashboard"
          >
            <i className="mdi mdi-home"></i>
            Dashboard
          </Link>

          <Link
            className="list-group-item list-group-item-action bg-light"
            to="/event"
          >
            <i className="mdi mdi-calendar"></i> Events
          </Link>

          <Link
            className="list-group-item list-group-item-action bg-light"
            to="/verse"
          >
            <i className="fas fa-bible"></i> Verses
          </Link>
          <Link
            className="list-group-item list-group-item-action bg-light"
            to="/sermon"
          >
            <b-icon icon="collection-play-fill"></b-icon>
            Sermons
          </Link>

          <Link
            className="list-group-item list-group-item-action bg-light"
            to="/department"
          >
            <i className="mdi mdi-office-building"></i> Departments
          </Link>

          <Link
            className="list-group-item list-group-item-action bg-light"
            to="/event"
          >
            <i className="mdi mdi-contacts"></i> Leaders
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
