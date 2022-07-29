import Layout from "./components/layout/Layout";
import MyMap from "./components/map/MyMap";
import "./styles.css";

import { Routes, Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Header from "./client/client-components/Header";
import ClientLayout from "./client/client-components/ClientLayout";

export default function App() {
  return (
    <div className="App">
      <ClientLayout />

      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyMap />} />
          <Route path="dash" element={<Dashboard />} />
        </Route>
      </Routes> */}
    </div>
  );
}
