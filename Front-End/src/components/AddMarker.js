import React from "react";

import Button from "@material-ui/core/Button";
import axios from "axios";

const AddMarker = ({ city, addmarker, markers, setMarkers }) => {
  const singleMarker = {
    id: city.properties.GEONAMEID,
    city: city.properties.NAME,
    color: "yellow",
    coordinates: [city.properties.LATITUDE, city.properties.LONGITUDE],
    value: 50,
  };
  const updateMakers = (newMarker) => {
    axios.post("/markers/");
  };

  return (
    <Button variant="outlined" onClick={() => updateMakers(singleMarker)}>
      Add a Marker
    </Button>
  );
};

export default AddMarker;
