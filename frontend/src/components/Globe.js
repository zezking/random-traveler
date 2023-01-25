import React from "react";
import { makeStyles } from "@material-ui/core";
import ReactGlobe from "react-globe";
import Button from "@material-ui/core/Button";
import { randomCity } from "../helper/helper";
import { useCookies } from "react-cookie";

import axios from "axios";
const useStyles = makeStyles((theme) => ({
  mainButton: {
    Width: "100px",
    height: "50px",
    margin: "0 auto",
    background: "white",
  },
}));

const Globe = ({ setCity, cities, setOpenCityCard, markers, setMarkers }) => {
  const classes = useStyles();

  return (
    <>
      <ReactGlobe
        markers={markers}
        globeBackgroundTexture={null}
        height="47vh"
        width="60vw"
        options={{
          enableMarkerTooltip: true,
          enableMarkerGlow: false,
          markerRadiusScaleRange: [0.2, 0.5],
          markerType: "bar",
          markerTooltipRenderer: (marker) => `City: ${marker.city}`,
        }}
      />
      <Button
        color="primary"
        variant="outlined"
        className={classes.mainButton}
        onClick={() => {
          setCity(randomCity(cities));
          setOpenCityCard(true);
        }}
      >
        Pick a random city
      </Button>
    </>
  );
};

export default Globe;
