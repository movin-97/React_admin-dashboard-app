import React from "react";
import './DashboardStyle.css'

const CircleProgress = ({color}) => {
  return (
    <div className="progress blue">
      <span className="progress-left">
        <span className="progress-bar" style={{borderColor:`${color}`}}></span>
      </span>
      <span className="progress-right">
        <span className="progress-bar" style={{borderColor:`${color}`}}></span>
      </span>
      <div className="progress-value">90%</div>
    </div>
  );
};

export default CircleProgress;
