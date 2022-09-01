import React from "react";
import "./Navbar.css";
import {NavLink} from 'react-router-dom'

const SideNavbar = () => {
  return (
    <nav className="header__nav">
      <ul className="list-group">
        <li className="list-group-item border-0 text-center">
          <img
            src="http://cdn.shopify.com/s/files/1/0535/7233/7834/files/Best-Electric-Bike-Food-Delivery-Toronto-Logo_e82de4df-209b-49d6-bbe2-cfaa9bd377c7.png?v=1620421528"
            alt="Logo"
            width={150}
            height={70}
            className=""
          />
        </li>
        <li className="list-group-item list-style">
          <NavLink to={'/'} className="nav-link">
            <i className="fa-solid fa-chart-line"></i>
          <strong> Dashbord</strong>
          </NavLink>
        </li>
        <li className="list-group-item list-style">
        <NavLink to={'/user'} className="nav-link">
          <i className="fa-solid fa-screwdriver-wrench"></i>
          <strong> Admin</strong>
        </NavLink>
          
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
