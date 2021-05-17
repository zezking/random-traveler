import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { randomCities } from "../helper/helper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

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

const City = ({ cities }) => {
  console.log(cities);
  console.log(cities.length);

  return (
    <Card>
      <h1>cities card</h1>
    </Card>
  );
};

export default City;
