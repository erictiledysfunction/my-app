import React from "react";
import "./Chart.css";




export function Chart() {
  const data = [
    { date: "Apr 1, 2025", sales: 115, purchase: 28 },
    { date: "Apr 7, 2025", sales: 75, purchase: 35 },
    { date: "Apr 14, 2025", sales: 52, purchase: 22 },
  ]

  const maxValue = 120

  return (
    <div className="graph-container">
      <h2 className="graph-title">Stocks Graph</h2>

      <div className="chart-wrapper">
        {/* Y-axis with labels */}
        <div className="y-axis">
          <div className="y-label">120</div>
          <div className="y-label">90</div>
          <div className="y-label">60</div>
          <div className="y-label">30</div>
          <div className="y-label">0</div>
        </div>

        {/* Main chart area */}
        <div className="chart-main">
          {/* Grid lines */}
          <div className="grid-lines">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
          </div>

          {/* Bars section */}
          <div className="bars-container">
            {data.map((item, idx) => (
              <div key={idx} className="bar-group">
                <div className="bar-pair">
                  <div className="bar sales" style={{ height: `${(item.sales / maxValue) * 100}%` }}></div>
                  <div className="bar purchase" style={{ height: `${(item.purchase / maxValue) * 100}%` }}></div>
                </div>
                <span className="x-label">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color sales"></div>
          <span>Sales</span>
        </div>
        <div className="legend-item">
          <div className="legend-color purchase"></div>
          <span>Purchase</span>
        </div>
      </div>
    </div>
  )
}
