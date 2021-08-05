import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ onToggle }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top fixed">
        <FontAwesomeIcon
          icon={faList}
          className="clickable"
          onClick={() => onToggle()}
        />

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
