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
function Home() {
  const [cities, setCities] = useState([]);
  const [count, setCount] = useState(0);
  const [openCityCard, setOpenCityCard] = useState(false);
  const [city, setCity] = useState({});
  console.log(city);
  useEffect(() => {
    axios
      .get(
        `https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson`
      )
      .then((result) => {
        setCities(result.data.features);
      });
  }, [count]);

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
