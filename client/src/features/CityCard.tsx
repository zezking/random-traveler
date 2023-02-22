import React from "react";
import { continentSlicer } from "../helper/helper";
import TravelCard from "../components/UI/Card";
const CityCard = ({ city, markers, setOpenCityCard, setCity, setMarkers }) => {
  const {
    NAME: name,
    ADM0NAME: country,
    TIMEZONE: timezone,
    LATITUDE: lat,
    LONGITUDE: lon,
  } = city.properties;
  return <TravelCard city={city} />;
};

export default CityCard;
