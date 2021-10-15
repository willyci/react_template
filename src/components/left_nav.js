import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-light">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/login"
              exact
              activeClassName="active"
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/AODCallLogForm"
              exact
              activeClassName="active"
            >
              AOD Call Log Form
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/MonthlyCallLogs"
              exact
              activeClassName="active"
            >
              Monthly Call Logs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/ManageAdmins"
              exact
              activeClassName="active"
            >
              Manage Administrators
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/ManageUsers"
              exact
              activeClassName="active"
            >
              Manage Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/404" activeClassName="active">
              Not Found 404
            </NavLink>
          </li>

          <li className="nav-item" style={{ display: "none" }}>
            <NavLink className="nav-link" to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item" style={{ display: "none" }}>
            <NavLink
              className="nav-link"
              to={`/about/${3}/${"Mohan"}`}
              activeClassName="active"
            >
              Route Parameters
            </NavLink>
          </li>
          <li className="nav-item" style={{ display: "none" }}>
            <Link
              className="nav-link"
              to={`/product?name=${"React eBook"}&category=${"eBook"}`}
              activeClassName="active"
            >
              Query String
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
