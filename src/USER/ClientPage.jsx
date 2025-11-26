
import React from "react";
import { ClientHeader } from "./clientHead";
import { ClientProductList } from "./ClientProductList";

export const ClientPage = () => {
  return (
    <div>
     
      <ClientHeader />  

      <div className="ProducList-container"> 
        <ClientProductList /> 
      </div>
      

      
     
    </div>
  );
};