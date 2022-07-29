import * as React from "react";
import { Typography, AppBar, Toolbar, Button, Divider } from "@mui/material";

const drawerWidth = 300;

const Header = () => {
  return (
    <div>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TakeMyLuggage
          </Typography>

          <Button color="inherit">Map</Button>

          <Button color="inherit">Dashboard</Button>

          <Divider />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
