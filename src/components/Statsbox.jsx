import React from "react";
import "./Statsbox.css";



export function Statsbox() {
  return (
    <div className="container">
      <div className="Statscard">
        <div className="headerRow">
          <div className="header headerOrange">Low Stocks</div>
          <div className="header headerRed">Out of Stocks</div>
        </div>
        <div className="contentRow">
          <div className="numberOrange">69</div>
          <div className="numberRed">69</div>
        </div>
      </div>
    </div>
  )
}
