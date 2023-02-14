import React, { useState, useEffect } from "react";
import Globe from "react-globe.gl";
import Navigation from "./Navigation";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import CityList from "./CityList";
import CityCard from "./CityCard";
import axios from "axios";
import { useCookies } from "react-cookie";
import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Button,
  ButtonGroup,
  DialogTitle,
  Input,
  TextField,
} from "@mui/material";
import Modal from "./UI/Modal";
import RegisterForm from "../features/RegisterForm";
import { City } from "../types";

const initiaMarker = [
  {
    id: "0",
    city: "Please Log In ",
    color: "red",
    coordinates: [1, 1],
    value: 50,
  },
];

function Home() {
  const [cities, setCities] = useState<City[]>([
    { properties: { LONGITUDE: 0, LATITUDE: 0, POP_MAX: 0, NAME: "" } },
  ]);
  const [openCityCard, setOpenCityCard] = useState(false);
  const [city, setCity] = useState({});
  const [cookie, setCookie] = useCookies(["userData"]);
  const [markers, setMarkers] = useState(initiaMarker);

  const [openRegisterForm, setOpenRegisterForm] = useState<boolean>(false);

  useEffect(() => {
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
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_CITY_DATA_URL}`).then((result) => {
      setCities(result.data.features);
    });
  }, []);

  const w = window.innerWidth;
  const shiftFactor = 0.4;
  const shiftAmount = shiftFactor * w;

  const openRegisterFormHandler = () => {
    setOpenRegisterForm(true);
  };

  const closeRegisterFormHandler = () => {
    setOpenRegisterForm(false);
  };

  return (
    <>
      <div style={{ position: "absolute", zIndex: 1000 }}>
        <Autocomplete
          id="search"
          options={cities}
          getOptionLabel={(city: City) => city.properties.NAME}
          renderInput={(params) => (
            <TextField {...params} label="Search city" variant="outlined" />
          )}
          onChange={(event, value) => {
            //setCity(value);
            //setOpenCityCard(true);
          }}
        />
        <ButtonGroup variant="contained">
          <Button>Login</Button>
          <Button onClick={openRegisterFormHandler}>Register</Button>
        </ButtonGroup>
      </div>

      <RegisterForm
        open={openRegisterForm}
        onRegisterFormClose={closeRegisterFormHandler}
      />

      <div
        style={{
          marginLeft: `-${shiftAmount}px`,
        }}
      >
        <Globe
          width={w + shiftAmount}
          htmlElementsData={cities}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          labelLat={(d) => {
            const city = d as City;
            return city.properties.LATITUDE;
          }}
          labelLng={(d) => {
            const city = d as City;
            return city.properties.LONGITUDE;
          }}
          labelText={(d) => {
            const city = d as City;
            return city.properties.NAME;
          }}
          labelSize={(d) => {
            const city = d as City;
            return Math.sqrt(city.properties.POP_MAX) * 4e-4;
          }}
          labelDotRadius={(d) => {
            const city = d as City;
            return Math.sqrt(city.properties.POP_MAX) * 4e-4;
          }}
          labelColor={() => "rgba(251, 133, 0, 0.75)"}
          labelResolution={2}
        />
      </div>
    </>
  );
}

export default Home;
