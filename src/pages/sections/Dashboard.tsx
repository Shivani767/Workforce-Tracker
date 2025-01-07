import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Html } from "@react-three/drei";
import "./Dashboard.css"; // Ensure to add necessary CSS for animations

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! Manage your tasks and workflows here.</p>
      </header>
      <main className="dashboard-main">
        <Canvas className="dashboard-canvas">
          {/* 3D Animated Sphere */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 5, 5]} intensity={1} />
          <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
            <meshStandardMaterial color="blue" wireframe />
          </Sphere>
          <Html position={[0, 1.5, 0]}>
            <div className="sphere-label">3D Overview</div>
          </Html>
          <OrbitControls enableZoom={true} />
        </Canvas>
        <section className="dashboard-section">
          <h2>Overview</h2>
          <p>Quick insights into your projects and performance.</p>
          <ul>
            <li>Project Progress: 75%</li>
            <li>Tasks Completed: 120</li>
            <li>Upcoming Deadlines: 5</li>
          </ul>
        </section>
        <section className="dashboard-section">
          <h2>Tasks</h2>
          <p>Track and manage your tasks efficiently.</p>
          <ul>
            <li>Task 1: Complete Design Mockups</li>
            <li>Task 2: Review Codebase</li>
            <li>Task 3: Update Documentation</li>
          </ul>
        </section>
        <section className="dashboard-section">
          <h2>Reports</h2>
          <p>Analyze performance metrics and generate reports.</p>
          <ul>
            <li>Weekly Performance Report</li>
            <li>Monthly Revenue Analysis</li>
            <li>Yearly Goal Tracking</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
