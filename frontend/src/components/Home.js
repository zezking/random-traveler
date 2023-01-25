import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import CityList from "./CityList";
import CityCard from "./CityCard";
import Grid from "@material-ui/core/Grid";
import Globe from "./Globe.js";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Hidden } from "@material-ui/core";
import { useCookies } from "react-cookie";
const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    maxHeight: 500,
  },
  gridHeight: {
    height: "80vh",
  },

  mainContentMargin: {
    marginTop: 100,
  },

  cityCard: {
    width: 400,
  },
  cityList: {
    width: 300,
  },
  cityDetailPlaceHolder: {
    width: 400,
  },
}));
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
  const [cities, setCities] = useState([]);
  const [openCityCard, setOpenCityCard] = useState(false);
  const [city, setCity] = useState({});
  const [cookie, setCookie] = useCookies(["userData"]);
  const [markers, setMarkers] = useState(initiaMarker);

  console.log(markers);
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

  const classes = useStyles();

  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      className={classes.gradientBackground}
    >
      <Grid spacing={3} container justify="center" align="center">
        <Navigation
          cities={[...cities]}
          setCity={setCity}
          setOpenCityCard={setOpenCityCard}
        />
      </Grid>
      <Grid
        container
        justify="space-around"
        className={classes.mainContentMargin}
      >
        <Hidden smDown>
          <Grid container item xs={12} md={4} justify="center">
            <Card className={classes.cityList}>
              <List className={classes.root}>
                <CityList
                  cities={cities}
                  setOpenCityCard={setOpenCityCard}
                  setCity={setCity}
                />
              </List>
            </Card>
          </Grid>
        </Hidden>
        <Grid
          container
          item
          xs={12}
          md={4}
          alignItems="center"
          justify="center"
        >
          <Globe
            cities={cities}
            setCity={setCity}
            setOpenCityCard={setOpenCityCard}
            markers={markers}
          />
        </Grid>
        <Grid
          container
          item
          justify="center"
          alignContent="center"
          xs={12}
          md={4}
        >
          {openCityCard ? (
            <CityCard
              openCityCard={openCityCard}
              city={city}
              setOpenCityCard={setOpenCityCard}
              setCity={setCity}
              cities={cities}
              setMarkers={setMarkers}
              markers={markers}
            />
          ) : (
            <Card>
              <Typography
                className={classes.cityDetailPlaceHolder}
                variant="h6"
                m={2}
                align="center"
              >
                Please Select a city
              </Typography>
            </Card>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
