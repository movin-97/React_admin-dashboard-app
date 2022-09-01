import React from "react";
import './UserStyle.css'

const UserHeader = ({ filter, setFilter }) => {
  return (
    <div className="row">
      <div className="col-6">
        <button type="button" className="btn bg-body shadow-sm">
          <i className="fa-solid fa-arrow-up"></i> Export
        </button>
        <button type="button" className="btn bg-body shadow-sm ms-2">
          <i className="fa-solid fa-arrow-down"></i> Import
        </button>
        <button type="button" className="btn btn-danger ms-2">
          <i className="fa-solid fa-trash"></i> Delete
        </button>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-3">
            <button type="button" className="btn bg-body shadow-sm">
              <i className="fa-solid fa-sort"></i> Export
            </button>
          </div>
          <div className="col-6">
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
          <div className="col-3">
            <button type="button" className="btn btn-info">
              <i className="fa-solid fa-plus"></i> Add new
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
