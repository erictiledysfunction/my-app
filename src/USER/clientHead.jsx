import React from "react";
import dalilogo from "../images/dalilogo.png";
import logoutbtn from "../images/logoutbtn.png";
import { Link } from "react-router-dom";
import "./clientHead.css";

export const ClientHeader = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={dalilogo} alt="Logo" className="logo" />
        <h2 className="title">DALI GROCERY</h2>
      </div>

      <div className="header-right">
        <span className="role">CLIENT</span>
       
       <Link to="/login" className="logout-btn">
        <img src={logoutbtn} alt="logout" className="logout" />
        </Link>
      </div>
    </header>
  )
}


