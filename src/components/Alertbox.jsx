import React from "react";
import "./Alertbox.css";

export function Alertbox() {
  return (
    <div className="alerts-card">
      <h2 className="alerts-title">Alerts</h2>
      <div className="alerts-list">
        <div className="alert-item">
          <span className="alert-text">Chuckie needs to restock</span>
          <span className="alert-time">Today</span>
        </div>
        <div className="alert-item">
          <span className="alert-text">Waters needs to restock</span>
          <span className="alert-time">Today</span>
        </div>
      </div>
    </div>
  )
}
