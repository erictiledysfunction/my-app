import React from "react";
import "./InventoryStats.css";


export function InventoryStats({
  totalProducts = 1234,
  lastUpdated = "January 69, 2026",
  statuses = [
    { label: "In Stock", value: 145, color: "green" },
    { label: "Low Stock", value: 145, color: "orange" },
    { label: "Out of Stock", value: 145, color: "red" },
  ],
}) 


{
  return (
    <div className="stats-card">
      <div className="stats-section">
        <span className="stats-label">Total products</span>
        <span className="stats-value">{totalProducts}</span>
      </div>

      <div className="stats-divider"></div>

      <div className="stats-section">
        <span className="stats-label">Last updated</span>
        <span className="stats-value">{lastUpdated}</span>
      </div>

      <div className="stats-section stats-status">
        {statuses.map((status, index) => (
          <div key={index} className="status-item">
            <span className={`status-dot status-${status.color}`}></span>
            <span className="status-text">
              {status.label}: {status.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
