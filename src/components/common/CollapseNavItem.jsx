import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";

const CollapseNavItem = ({ route }) => {
  const history = useHistory();
  const navigate = (link) => {
    history.push(link);
  };
  return (
    <>
      <a
        className="list-group-item list-group-item-action bg-light"
        data-toggle="collapse"
        href={"#" + route.id}
      >
        <FontAwesomeIcon icon={route.icon} className="mr-2" />
        {route.name}
      </a>

      <div className="collapse transition-collapse" id={route.id}>
        {route.children &&
          route.children.map((routeChild) => {
            return (
              <div
                className="subLink clickable"
                onClick={() => navigate(routeChild.path)}
              >
                <a key={routeChild.path} className="" to={routeChild.path}>
                  <FontAwesomeIcon icon={routeChild.icon} className="mr-2" />{" "}
                  {routeChild.name}
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CollapseNavItem;
