import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import CityList from "./components/CityList";
import CityCard from "./components/CityCard";
import Grid from "@material-ui/core/Grid";
import Globe from "./components/Globe.js";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "auto",
    maxHeight: 500,
  },

  grid: {
    height: "100vh",
  },
}));
function App() {
  const [cities, setCities] = useState([]);
  const [count, setCount] = useState(0);
  const [CityDetails, setCityDetails] = useState(false);
  const [city, setCity] = useState({});

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
    <>
      <Navigation />
      <Grid
        container
        alignContent="center"
        heigth="100%"
        className={classes.grid}
        justify="center"
        spacing={6}
      >
        <Grid item md={2}>
          <Card>
            <List className={classes.root}>
              <CityList
                cities={cities}
                setCityDetails={setCityDetails}
                setCity={setCity}
              />
            </List>
          </Card>
        </Grid>
        <Grid container item md={5} alignContent="center" justify="center">
          <Globe cities={cities} />
          <Button
            color="primary"
            variant="outlined"
            onClick={() => setCount(count + 1)}
          >
            Take me somewhere I can't go!
          </Button>
        </Grid>
        <Grid item md={5}>
          {CityDetails && (
            <CityCard
              city={city}
              setCityDetails={setCityDetails}
              setCity={setCity}
              cities={cities}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default App;
