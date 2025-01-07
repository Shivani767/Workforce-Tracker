import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Manage your tasks and workflows here.</p>
      </header>
      <main className="dashboard-main">
        <section className="dashboard-section">
          <h2>Overview</h2>
          <p>Quick insights into your projects and performance.</p>
        </section>
        <section className="dashboard-section">
          <h2>Tasks</h2>
          <p>Track and manage your tasks efficiently.</p>
        </section>
        <section className="dashboard-section">
          <h2>Reports</h2>
          <p>Analyze performance metrics and generate reports.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
