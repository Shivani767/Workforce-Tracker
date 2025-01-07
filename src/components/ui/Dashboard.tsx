import React from "react";
import { TbLayoutDashboard } from "react-icons/tb";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>
          <TbLayoutDashboard /> Dashboard
        </h1>
      </header>
      <main className="dashboard-content">
        <p>Welcome to the dashboard! Here, you can manage and track your tasks, workflows, and performance.</p>
        <div className="dashboard-sections">
          <section>
            <h2>Overview</h2>
            <p>Quick insights into your team's progress and metrics.</p>
          </section>
          <section>
            <h2>Tasks</h2>
            <p>View and manage your ongoing tasks.</p>
          </section>
          <section>
            <h2>Reports</h2>
            <p>Analyze performance with detailed reports.</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
