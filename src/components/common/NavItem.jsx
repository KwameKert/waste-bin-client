import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ route }) => {
  return (
    <Link
      className="list-group-item list-group-item-action bg-light"
      to={route.path}
    >
      <FontAwesomeIcon icon={route.icon} /> {route.name}
    </Link>
  );
};

export default NavItem;
