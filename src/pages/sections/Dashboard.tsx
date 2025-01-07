import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Manage your tasks and workflows here.</p>
      </header>
      <main className="dashboard-main">
        <div className="dashboard-grid">
          <div className="dashboard-box overview-box">
            <h2>Overview</h2>
            <p>Project Progress: 75%</p>
            <p>Tasks Completed: 120</p>
            <p>Upcoming Deadlines: 5</p>
          </div>
          <div className="dashboard-box tasks-box">
            <h2>Tasks</h2>
            <ul>
              <li>Complete Design Mockups</li>
              <li>Review Codebase</li>
              <li>Update Documentation</li>
            </ul>
          </div>
          <div className="dashboard-box reports-box">
            <h2>Reports</h2>
            <ul>
              <li>Weekly Performance Report</li>
              <li>Monthly Revenue Analysis</li>
              <li>Yearly Goal Tracking</li>
            </ul>
          </div>
          <div className="dashboard-box charts-box">
            <h2>Charts</h2>
            <div className="chart-placeholder">[Chart Placeholder]</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
