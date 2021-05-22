import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import { continentSlicer } from "../helper/helper";

const CityCard = ({ city, marker, setCityDetails, setCity }) => {
  const { NAME: name, ADM0NAME: country, TIMEZONE: timezone } = city.properties;

  const continent = continentSlicer(timezone);

  return (
    <Card>
      <Button onClick={() => setCityDetails(false)}>
        <CloseIcon />
      </Button>
      <Typography variant="h1">{name}</Typography>
      <Typography>{country}</Typography>
      <Typography>{continent}</Typography>
    </Card>
  );
};

export default CityCard;
