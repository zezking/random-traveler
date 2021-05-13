import React from "react";

import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
const Navigation = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Random Traveler</Typography>
        <Button edge="end" color="inherit">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
