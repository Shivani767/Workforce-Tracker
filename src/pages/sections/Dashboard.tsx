import React from "react";
import { Bar } from "react-chartjs-2"; // Assuming you have chart.js installed
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
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Manage your tasks and workflows here.</p>
      </header>

      <main className="dashboard-main">
        {/* Using Flexbox for layout */}
        <div className="dashboard-flex">
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

          {/* Tableau Dashboard Section */}
          <div className="dashboard-box tableau-box">
            <h2>Embedded Tableau Dashboard</h2>
            <iframe
              title="Tableau Dashboard"
              src="https://public.tableau.com/views/AmazonsBusinessAnalysisinIndia/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
              width="100%"
              height="400px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
