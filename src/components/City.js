import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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

const City = ({ city }) => {
  const [cityWiki, setCitiWiki] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson`
      )
      .then((data) => data.features);
  }, [city]);
  console.log(city);
  return (
    <Card>
      <h1>{city.name}</h1>
    </Card>
  );
};

export default City;
