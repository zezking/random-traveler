import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const CityCard = ({ city, marker, setCityDetails, setCity }) => {

  return (
    <Card>
      <Button onClick={() => setCityDetails(false)}>
        <CloseIcon />
      </Button>
      <h1>{city}</h1>
    </Card>
  );
};

export default CityCard;
