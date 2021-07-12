import { NavLink } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="logo.png" alt="" className="navbar-logo" />

      <ul className="navbar-links">
        <NavLink exact to="/">
          <li className="navbar-links-item">View Properties</li>
        </NavLink>
        <NavLink exact to="/add-property">
          <li className="navbar-links-item">Add a Property</li>
        </NavLink>
      </ul>
    </div>
  );
};
export default NavBar;
