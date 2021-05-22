import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import theme from "../theme/theme";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
const CityCard = ({ city, marker, setCityDetails, setCity }) => {
  const { NAME } = city.properties;
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Button onClick={() => setCityDetails(false)}>
          <CloseIcon />
        </Button>
        <Typography variant="h1">
          {city ? NAME : "Please Select a city"}
        </Typography>
      </Card>
    </ThemeProvider>
  );
};

export default CityCard;
