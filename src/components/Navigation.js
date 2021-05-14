import React from "react";
import {
  AppBar,
  Container,
  Box,
  Button,
  Toolbar,
  Typography,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
  },
  navBar: {},
  Button: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
  },
});
const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Randvia</Typography>

          <Button variant="contained" color="inherit">
            Login
          </Button>
          <Button variant="contained" color="inherit">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
