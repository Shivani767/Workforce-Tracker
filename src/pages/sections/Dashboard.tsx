 import React from "react";
import { Bar } from "react-chartjs-2";
import "./Dashboard.css";

const Dashboard: React.FC = () => {
  // Data for the charts
  const barChartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [5000, 8000, 6000, 9000, 12000, 15000],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue Chart",
      },
    },
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Interactive Dashboard</h1>
        <p>Manage tasks, workflows, and view analytics all in one place.</p>
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
                  <button className="task-button" onClick={() => alert(`Task selected: ${task}`)}>
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
            <div className="chart-container">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

