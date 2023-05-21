import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { DropDownFont } from "../DropdownFont/DropDownFont";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.sass";
const Header = () => {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faBook} />
      <DropDownFont />
      <ThemeToggle />
    </div>
  );
};

export default Header;
