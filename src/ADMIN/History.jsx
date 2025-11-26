import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { StockHistory } from "../components/stockhistory";

export const History = () => {
  return (
    <div>
     
      <Header />  
      <Sidebar />
      

      <div className="HistoryContainer"> 
      
        <StockHistory/>
      
        
   
      
      </div>
      
     
    </div>
  );
};