import React, { useState } from "react";

const DropDownParent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className="dropdown" onClick={toggleOpen}>
      <button
        className="btn btn-secondary dropdown-toggle btn-sm"
        type="button"
        id={"more" + "buttonToggle"}
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
      >
        more...
      </button>
      <div className={menuClass} aria-labelledby={"more" + "buttonToggle"}>
        {props.children}
      </div>
    </div>
  );
};

export default DropDownParent;
