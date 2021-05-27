import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import ReactGlobe from "react-globe";
import Button from "@material-ui/core/Button";
import { randomCity } from "../helper/helper";
import { useCookies } from "react-cookie";
import { Redirect } from "react-router-dom";

import axios from "axios";
const useStyles = makeStyles((theme) => ({
  mainButton: {
    Width: "100px",
    height: "50px",
    margin: "0 auto",
    background: "white",
  },
}));

const markers = [
  {
    id: "marker1",
    city: "Singapore",
    color: "red",
    coordinates: [1.3521, 103.8198],
    value: 50,
  },
  {
    id: "marker2",
    city: "New York",
    color: "blue",
    coordinates: [40.73061, -73.935242],
    value: 25,
  },
  {
    id: "marker3",
    city: "San Francisco",
    color: "orange",
    coordinates: [37.773972, -122.431297],
    value: 35,
  },
  {
    id: "marker4",
    city: "Beijing",
    color: "gold",
    coordinates: [39.9042, 116.4074],
    value: 135,
  },
  {
    id: "marker5",
    city: "London",
    color: "green",
    coordinates: [51.5074, 0.1278],
    value: 80,
  },
  {
    id: "marker6",
    city: "Los Angeles",
    color: "gold",
    coordinates: [29.7604, -95.3698],
    value: 54,
  },
];

const Globe = ({ setCity, cities, setOpenCityCard }) => {
  const [cookie] = useCookies(["userData"]);

  const initiaMarker = [
    {
      id: "0",
      city: "Please Log In ",
      color: "red",
      coordinates: [1, 1],
      value: 50,
    },
  ];

  const [markers, setMarkers] = useState(initiaMarker);

  const classes = useStyles();
  useEffect(() => {
    console.log(initiaMarker);
    if (cookie.userData) {
      axios.get(`/markers/${cookie.userData.id}`).then((res) => {
        const markersData = res.data.map((marker) => {
          return {
            id: marker.id,
            city: marker.city_name,
            color: "yellow",
            coordinates: [marker.lat, marker.lon],
            value: 50,
          };
        });
        setMarkers(markersData);
      });
      return;
    }

    setMarkers(initiaMarker);
  }, [cookie]);

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
