import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dashboardIcon from "../images/dashboardicon.png"
import inventoryIcon from "../images/inventoryicon.png"
import historyIcon from "../images/historyicon.png"
import sidebarGradient from "../images/sidebarbg.png"
import "./Sidebar.css";

export const Sidebar = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: dashboardIcon, path: "/" },
    { id: "inventory", label: "Inventory", icon: inventoryIcon, path: "/Inventory" },
    { id: "history", label: "History", icon: historyIcon, path: "/History" },
  ]

  const getActiveId = () => {
    if (location.pathname === "/") return "dashboard";
    if (location.pathname === "/Inventory") return "inventory";
    if (location.pathname === "/History") return "history";
    return "dashboard";
  }

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${getActiveId() === item.id ? "active" : ""}`}
            onClick={() => navigate(item.path)} 
          >
            <img src={item.icon || "/placeholder.svg"} alt={item.label} className="sidebar-icon" />
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-gradient">
        <img src={sidebarGradient || "/placeholder.svg"} alt="decorative" className="gradient-image" />
      </div>
    </aside>
  )
}