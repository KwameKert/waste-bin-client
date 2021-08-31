import React from "react";
import CollapseNavItem from "./common/CollapseNavItem";
import NavItem from "./common/NavItem";
const Sidebar = ({ routes }) => {
  const RenderLinks = () => {
    return (
      <>
        {routes.map((route) => {
          if (route.children && route.children.length > 0) {
            return <CollapseNavItem route={route} key={route.path} />;
          } else {
            return <NavItem route={route} key={route.path} />;
          }
        })}
      </>
    );
  };
  return (
    <>
      <div className="border-right " id="sidebar-wrapper">
        <h4 className="text-center py-3">Waste Management</h4>

        <div className="list-group list-group-flush mt-4">
          <RenderLinks />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
