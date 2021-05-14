import React from "react";

import { styled } from "@material-ui/core/styles";
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
  navBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
  },
  Button: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
  },
});
const Navigation = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h6" s>
            Randvia
          </Typography>
          <Container maxWidth="sm">
            <Button variant="contained" color="inherit">
              Login
            </Button>
            <Button variant="contained" color="inherit">
              Signup
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;
