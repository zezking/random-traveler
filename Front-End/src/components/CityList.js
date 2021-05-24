import React from "react";
import Button from "@material-ui/core/Button";

const baseURL = `https://en.wikipedia.org/w/api.php?action=opensearch&list=search&format=json&origin=*&search=`;
const extractURL = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&exintro&explaintext&redirects=1&titles=`;

const CityList = ({ cities, setCityDetails, setCity }) => {
  const handleClick = (cityObj) => {
    setCityDetails(true);
    setCity(cityObj);
  };

  return cities.map((city) => {
    if (city.properties.GEONAMEID !== -1) {
      return (
        <Button
          key={city.properties.GEONAMEID}
          size="large"
          fullWidth={true}
          p={2}
          onClick={() => handleClick(city)}
        >
          {city.properties.NAME}
        </Button>
      );
    }
  });
};

export default CityList;
