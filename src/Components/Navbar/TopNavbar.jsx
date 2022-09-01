import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <header>
      <div className="row">
        <div className="d-flex align-items-center justify-content-between">
          <div className="col-6">
            <h4 className="p-3 ms-3">
              <Link to={"/"} className="navbar-brand">
                <strong>MOVIN</strong>
              </Link>
            </h4>
          </div>
          <div
            style={{ cursor: "pointer" }}
            className="col-3 fs-5 d-flex justify-content-between  align-items-center"
          >
            <i className="fa-solid fa-magnifying-glass list-style"></i>
            <i className="fa-solid fa-envelope list-style"></i>
            <i className="fa-solid fa-bell list-style">
              <span
                className="badge bg-danger"
                style={{
                  fontSize: "8px",
                  borderRadius: "50%",
                  position: "absolute",
                  right: 100,
                  top: 28,
                }}
              >
                4
              </span>
            </i>
            <div className="d-flex align-items-center me-2">
              <div className="">
                <img
                src="https://i.pinimg.com/originals/8b/6e/c6/8b6ec60427f9b17c1d9aaf4c415babe3.png"
                alt="avatar"
                style={{ borderRadius: "50%", }}
                width={40}
                height={40}
              />
              </div>
              <div className="dropdown list-style">
                <i
                  className="fa-solid fa-chevron-down fs-6"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                </i>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={''} className="dropdown-item">Profile</Link>
                  </li>
                  <li>
                  <Link to={''} className="dropdown-item">Log In</Link>
                  </li>
                  <li>
                  <Link to={''} className="dropdown-item">Log Out</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
