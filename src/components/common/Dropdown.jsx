import React, { useState } from "react";

const Dropdown = ({ name, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuClass = `dropdown-menu${isOpen ? " show" : ""}`;
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown" onClick={toggleOpen}>
      <button
        className="btn btn-secondary dropdown-toggle btn-sm"
        type="button"
        id={name + "buttonToggle"}
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
      >
        {name}
      </button>
      <div className={menuClass} aria-labelledby={name + "buttonToggle"}>
        {options.map((option) => (
          <a className="dropdown-item" key={option.path} href={option.path}>
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
