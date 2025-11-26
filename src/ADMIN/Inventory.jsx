import React from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { InventoryStats } from "../components/InventoryStats";
import { Search } from "../components/Search";
import { ProductList } from "../components/product-list";

export const Inventory = () => {
  return (
    <div>
     
      <Header />  
      <Sidebar />

      <div className="InventoryContainer"> 
             <InventoryStats/>
             <Search/>
             <ProductList/>
      </div>
      
     
    </div>
  );
};