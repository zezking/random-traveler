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
  Input,
  TextField,
} from "@mui/material";

const initiaMarker = [
  {
    id: "0",
    city: "Please Log In ",
    color: "red",
    coordinates: [1, 1],
    value: 50,
  },
];

export interface City {
  properties: {
    LONGITUDE: number;
    LATITUDE: number;
    POP_MAX: number;
    NAME: string;
  };
}

function Home() {
  const [cities, setCities] = useState<City[]>([
    { properties: { LONGITUDE: 0, LATITUDE: 0, POP_MAX: 0, NAME: "" } },
  ]);
  const [openCityCard, setOpenCityCard] = useState(false);
  const [city, setCity] = useState({});
  const [cookie, setCookie] = useCookies(["userData"]);
  const [markers, setMarkers] = useState(initiaMarker);

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
    axios
      .get(
        `https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson`
      )
      .then((result) => {
        setCities(result.data.features);
      });
  }, []);

  console.log(cities);

  const w = window.innerWidth;
  const shiftFactor = 0.4;
  const shiftAmount = shiftFactor * w;
  return (
    // <Grid
    //   container
    //   alignContent="center"
    //   justify="center"
    //   className={classes.gradientBackground}
    // >
    //   <Grid spacing={3} container justify="center" align="center">
    //     <Navigation
    //       cities={[...cities]}
    //       setCity={setCity}
    //       setOpenCityCard={setOpenCityCard}
    //     />
    //   </Grid>
    //   <Grid
    //     container
    //     justify="space-around"
    //     className={classes.mainContentMargin}
    //   >
    //     <Hidden smDown>
    //       <Grid container item xs={12} md={4} justify="center">
    //         <Card className={classes.cityList}>
    //           <List className={classes.root}>
    //             <CityList
    //               cities={cities}
    //               setOpenCityCard={setOpenCityCard}
    //               setCity={setCity}
    //             />
    //           </List>
    //         </Card>
    //       </Grid>
    //     </Hidden>
    //     <Grid
    //       container
    //       item
    //       xs={12}
    //       md={4}
    //       alignItems="center"
    //       justify="center"
    //     >
    //       <Globe
    //         cities={cities}
    //         setCity={setCity}
    //         setOpenCityCard={setOpenCityCard}
    //         markers={markers}
    //       />
    //     </Grid>
    //     <Grid
    //       container
    //       item
    //       justify="center"
    //       alignContent="center"
    //       xs={12}
    //       md={4}
    //     >
    //       {openCityCard ? (
    //         <CityCard
    //           openCityCard={openCityCard}
    //           city={city}
    //           setOpenCityCard={setOpenCityCard}
    //           setCity={setCity}
    //           cities={cities}
    //           setMarkers={setMarkers}
    //           markers={markers}
    //         />
    //       ) : (
    //         <Card>
    //           <Typography
    //             className={classes.cityDetailPlaceHolder}
    //             variant="h6"
    //             m={2} // <Grid
    //   container
    //   alignContent="center"
    //   justify="center"
    //   className={classes.gradientBackground}
    // >
    //   <Grid spacing={3} container justify="center" align="center">
    //     <Navigation
    //       cities={[...cities]}
    //       setCity={setCity}
    //       setOpenCityCard={setOpenCityCard}
    //     />
    //   </Grid>
    //   <Grid
    //     container
    //     justify="space-around"
    //     className={classes.mainContentMargin}
    //   >
    //     <Hidden smDown>
    //       <Grid container item xs={12} md={4} justify="center">
    //         <Card className={classes.cityList}>
    //           <List className={classes.root}>
    //             <CityList
    //               cities={cities}
    //               setOpenCityCard={setOpenCityCard}
    //               setCity={setCity}
    //             />
    //           </List>
    //         </Card>
    //       </Grid>
    //     </Hidden>
    //     <Grid
    //       container
    //       item
    //       xs={12}
    //       md={4}
    //       alignItems="center"
    //       justify="center"
    //     >
    //       <Globe
    //         cities={cities}
    //         setCity={setCity}
    //         setOpenCityCard={setOpenCityCard}
    //         markers={markers}
    //       />
    //     </Grid>
    //     <Grid
    //       container
    //       item
    //       justify="center"
    //       alignContent="center"
    //       xs={12}
    //       md={4}
    //     >
    //       {openCityCard ? (
    //         <CityCard
    //           openCityCard={openCityCard}
    //           city={city}
    //           setOpenCityCard={setOpenCityCard}
    //           setCity={setCity}
    //           cities={cities}
    //           setMarkers={setMarkers}
    //           markers={markers}
    //         />
    //       ) : (
    //         <Card>
    //           <Typography
    //             className={classes.cityDetailPlaceHolder}
    //             variant="h6"
    //             m={2}
    //             align="center"
    //           >
    //             Please Select a city
    //           </Typography>
    //         </Card>
    //       )}
    //     </Grid>
    //   </Grid>
    // </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>

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
          <Button>Register</Button>
        </ButtonGroup>
      </div>
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
