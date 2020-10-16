import React from "react";
import { Dropdown } from "react-materialize";
import { NavLink } from "react-router-dom";

const NavDropDown = ({ id }) => {
  var navlinks = (
    <>
      <NavLink to="/">Women</NavLink>
      <NavLink to="/">Men</NavLink>
      <NavLink to="/">Assessories</NavLink>
      <NavLink to="/">Sales</NavLink>
    </>
  );

  return (
    <Dropdown
      id={id}
      className="nav_dropdown"
      trigger={
        <a className={"nav_dropdown_btn "}>
          <i className="material-icons large">dehaze</i>
        </a>
      }
    >
      {navlinks}
    </Dropdown>
  );
};

export default NavDropDown;
