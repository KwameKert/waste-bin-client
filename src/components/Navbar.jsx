import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onToggle }) => {
  const getTodayDate = () => {
    const date = new Date();
    let arr = date.toDateString().split(" ");
    return `${arr[1]} ${arr[2]}`;
  };
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top fixed ">
        <div className="row w-100">
          <div className="col-md-1 mt-2">
            <FontAwesomeIcon
              icon={faList}
              className="clickable"
              onClick={() => onToggle()}
            />
          </div>
          <div className="col-md-8 d-flex justify-content-center mt-2">
            <p className="text-muted mr-2">
              <FontAwesomeIcon icon={faCalendarAlt} /> Today
            </p>
            <span className="font-weight-bold">{getTodayDate()}</span>
          </div>
          <div className="col-md-3 float-right">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="user-avatar">
                      <img src="/images/user.png" alt="" />
                    </span>
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right "
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item disabled" href="#">
                      Profile
                    </a>

                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>

                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="/login">
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
