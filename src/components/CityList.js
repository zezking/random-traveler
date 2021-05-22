import React, { useState, useEffect, useRef } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import theme from "../theme/theme";
const baseURL = `https://en.wikipedia.org/w/api.php?action=opensearch&list=search&format=json&origin=*&search=`;
const extractURL = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&redirects=1&titles=`;
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const CityList = ({ cities, setCityDetails, setCity }) => {
  const handleClick = (cityObj) => {
    setCityDetails(true);
    setCity(cityObj);
  };

  return cities.map((city) => {
    if (city.properties.GEONAMEID !== -1) {
      return (
        <ThemeProvider theme={theme}>
          <Button
            key={city.properties.GEONAMEID}
            size="large"
            fullWidth={true}
            p={2}
            onClick={() => handleClick(city)}
          >
            {city.properties.NAME}
          </Button>
        </ThemeProvider>
      );
    }
  });
};

export default CityList;
