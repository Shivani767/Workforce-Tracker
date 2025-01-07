import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/sections/Home";
import Page from "./pages/Page";
import Dashboard from "./pages/sections/Dashboard"; // Import the Dashboard component

function App() {
  return (
    <>
      <Routes>
        {/* Nested routes with Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page/:id" element={<Page />} />
          <Route path="/page/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
