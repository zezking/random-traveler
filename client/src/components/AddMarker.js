import React, { useEffect } from "react";

import Button from "@material-ui/core/Button";
import axios from "axios";

import { useCookies } from "react-cookie";

const AddMarker = ({ city, addmarker, markers, setMarkers }) => {
  const [cookie, setCookie] = useCookies(["userData"]);

  const updateMakers = (event) => {
    event.preventDefault();
    if (cookie.userData) {
      const singleMarker = {
        userId: cookie.userData.id,
        cityName: city.properties.NAME,
        lat: city.properties.LATITUDE,
        lon: city.properties.LONGITUDE,
      };

      axios
        .post(`/markers/`, { inputMarker: singleMarker })
        .then((res) => {
          const { id, city_name, lat, lon, user_id } = res.data;
          setMarkers((prevMarkers) => {
            const currentMarker = {
              id: id,
              city: city_name,
              color: "yellow",
              coordinates: [lat, lon],
              value: 50,
            };

            const newMarkers = prevMarkers
              .slice(0, prevMarkers.length)
              .concat(currentMarker);

            console.log(newMarkers);

            return [...newMarkers];
          });
        })
        .catch((err) => console.log(`There is err when add marker ${err}`));
    }
  };
  return (
    <form
      onSubmit={(event) => {
        updateMakers(event);
      }}
    >
      <Button type="submit" variant="outlined">
        Add a Marker
      </Button>
    </form>
  );
};

export default AddMarker;
