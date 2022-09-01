import React from "react";
import "./UserStyle.css";

const UserHeader = ({ filter, setFilter }) => {
  return (
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
        <div className="row">
          <div className="col-9">
            <div className="form-group has-search">
              <i className="fa fa-search form-control-feedback"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
