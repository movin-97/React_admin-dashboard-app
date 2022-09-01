import React, { useState } from "react";
import { Link } from "react-router-dom";
import Hire from "./Hire";
import Recruit from "./Recruit";
import Calendar from "react-calendar";
import './DashboardStyle.css';
import 'react-calendar/dist/Calendar.css';
import AppliactionUsers from "./AppliactionUsers";

const Dashboard = () => {
  const [value, onChange] = useState(new Date());
  return (
    <section className="mt-2 mb-5">
      <div className="row">
        <div className="col-8">
          <div className="row p-3">
            <div
              className="card border-0 shadow-sm bg-primery p-3 mb-2 rounded text-white"
              style={{ backgroundColor: "rgb(106,39,240)" }}
            >
              <div className="card-body">
                <h3 className="card-title">Hello World</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <Link to={""} className="card-text text-white">
                  review it!
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <Hire />
          </div>
          <div className="row m-auto mt-3">
            <Recruit />
          </div>
        </div>
        <div className="col-4">
          <div className="">
            <div className="row justify-content-center">
              <div className="">
                <Calendar onChange={()=>onChange(value)} value={value} />
              </div>
            </div>
            <div className="row">
              <div className="">
                <AppliactionUsers/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
