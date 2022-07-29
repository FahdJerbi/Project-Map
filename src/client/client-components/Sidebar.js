import * as React from "react";
import { Drawer, Typography, Divider, AppBar, Toolbar } from "@mui/material";
// import PathSelector from "../list/PathSelector";

const drawerWidth = 300;

const Sidebar = () => {
  return (
    <div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box"
          }
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        {/* <PathSelector /> */}
        <Divider />
      </Drawer>
    </div>
  );
};

export default Sidebar;
