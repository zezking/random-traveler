import React from "react";
import { Card, Typography } from "@mui/material";
import { City } from "../../types";

const TravelCard = (props: { city: City }) => {
  const { city } = props;
  const {
    NAME: name,
    ADM0NAME: country,
    CONTINENT: continent,
    LATITUDE: lat,
    LONGITUDE: lon,
  } = city.properties;

  return (
    <Card>
      <Typography variant="h1">{name}</Typography>
      <Typography>Country: {country}</Typography>
      <Typography>Continent: {continent}</Typography>
      <Typography>Lat: {lat}</Typography>
      <Typography>Lon: {lon}</Typography>
    </Card>
  );
};

export default TravelCard;
