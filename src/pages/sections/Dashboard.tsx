import React from "react";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  const handleTaskClick = (task: string) => {
    alert(`Task selected: ${task}`);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Manage your tasks and workflows here.</p>
      </header>

      <main className="dashboard-main">
        <div className="dashboard-grid">
          {/* Overview Section */}
          <div className="dashboard-box overview-box">
            <h2>Overview</h2>
            <p>📈 <strong>Project Progress:</strong> 75%</p>
            <p>✅ <strong>Tasks Completed:</strong> 120</p>
            <p>⏳ <strong>Upcoming Deadlines:</strong> 5</p>
          </div>

          {/* Tasks Section */}
          <div className="dashboard-box tasks-box">
            <h2>Tasks</h2>
            <ul>
              {["Complete Design Mockups", "Review Codebase", "Update Documentation"].map((task, index) => (
                <li key={index}>
                  <button
                    className="task-button"
                    onClick={() => handleTaskClick(task)}
                    title={`Click to view details for "${task}"`}
                  >
                    {task}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Reports Section */}
          <div className="dashboard-box reports-box">
            <h2>Reports</h2>
            <ul>
              {["Weekly Performance Report", "Monthly Revenue Analysis", "Yearly Goal Tracking"].map(
                (report, index) => (
                  <li key={index}>
                    <a href={`#${report.toLowerCase().replace(/ /g, "-")}`} title={`View ${report}`}>
                      {report}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Charts Section */}
          <div className="dashboard-box charts-box">
            <h2>Charts</h2>
            <div className="chart-placeholder">
              <p>[Interactive Chart Coming Soon]</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

