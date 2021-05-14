import React from "react";
import ReactGlobe from "react-globe";
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

const Globe = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <ReactGlobe globeBackgroundTexture={null} />;
      </Container>
    </>
  );
};

export default Globe;
