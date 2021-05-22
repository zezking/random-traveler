import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const CityCard = ({ city, marker, setCityDetails, setCity }) => {
  const { NAME } = city.properties;
  console.log(NAME);
  return (
    <Card>
      <Button onClick={() => setCityDetails(false)}>
        <CloseIcon />
      </Button>

      <Typography variant="h1">
        {NAME ? NAME : "Please Select a city"}
      </Typography>
    </Card>
  );
};

export default CityCard;
