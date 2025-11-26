import React from "react";
import "./stockhistory.css";



export function StockHistory() {
 
  const historyData = [
    {
      id: "1",
      productName: "Product name",
      category: "Category",
      value: 124,
      trend: "up",
    },
    {
      id: "2",
      productName: "Product name",
      category: "Category",
      value: 124,
      trend: "down",
    },
    {
      id: "3",
      productName: "Hylos ni migs",
      category: "Category",
      value: 124,
      trend: "up",
    },
  ]

  return (
    <div className="stock-history-container">
      <h1 className="stock-history-title">Stock History</h1>
      <div className="stock-history-date">6/13/25</div>

      <div className="stock-history-scroll">
        {historyData.map((item) => (
          <div key={item.id} className="stock-history-card">
            <div className="stock-history-card-left">
              <h3 className="stock-history-product-name">{item.productName}</h3>
              <div className="stock-history-category-label">Category:</div>
              <p className="stock-history-category-value">{item.category}</p>
            </div>

            <div className="stock-history-card-right">
              <span className="stock-history-value">{item.value}</span>
              <span className={`stock-history-trend stock-history-trend-${item.trend}`}>
                {item.trend === "up" ? "↑" : "↓"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
