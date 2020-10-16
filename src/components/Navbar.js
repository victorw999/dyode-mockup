import React from "react";
import { Link } from "react-router-dom";
import NavDropDown from "./NavDropDown";
import NotificationBar from "./NotificationBar";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <nav className="nav-wrapper">
        {/*         
          MOBILE DROPDOWN        
        */}
        <ul className="dropdown-mobile left">
          <li className="nav_btn mobile">
            <NavDropDown id={"mobile_view"} />
          </li>
        </ul>
        {/*         
         LOGO + MENU       
        */}
        <div className="container">
          <div className="nav-content navtabs_wrapper ">
            <ul id="navtabs_id" className="tabs navtabs navtabs2">
              <li className="tab col s12 m3">
                <Link to="/" className="sitelogo">
                  <img src={require("../assets/img/logo.png")} alt="logo" />
                </Link>
              </li>

              <li className="tab col m3 menu">
                <a className="topNavTabs" href="#">
                  Women
                </a>
              </li>
              <li className="tab col m3 menu">
                <a className="topNavTabs" href="#">
                  Men
                </a>
              </li>
              <li className="tab col m3 menu">
                <a className="topNavTabs" href="#">
                  Accessories
                </a>
              </li>
              <li className="tab col m3 menu">
                <a className="topNavTabs" href="#">
                  Sales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
