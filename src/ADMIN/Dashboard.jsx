import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Cards } from "../components/Cards";
import { Statsbox } from "../components/Statsbox";
import { Alertbox } from "../components/Alertbox";
import { Chart } from "../components/Chart";

export const Dashboard = () => {
  return (
    <div>
     
      <Header />  
      <Sidebar />
      

      <div className="elementsContainer"> 
        <Cards/>
        <Statsbox/>
        <Alertbox/>
      </div>
      <div className="graphContainer">
        <Chart/>
      </div>
      
     
    </div>
  );
};