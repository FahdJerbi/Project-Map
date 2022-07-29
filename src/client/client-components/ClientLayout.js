import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ClientMap from "./ClientMap";
import "./map.css";

// const drawerWidth = 300;

const ClientLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      {/* Navbar component */}
      <Header />

      {/* Sidebar component */}
      <Sidebar />

      {/* Content  */}
      <div className="content">
        <ClientMap />
      </div>
    </div>
  );
};

export default ClientLayout;
