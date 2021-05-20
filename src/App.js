import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import CityList from "./components/CityList";
import CityCard from "./components/CityCard";
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
    <div className="App">
      <Navigation />
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <Box display="flex" flexDirection="row-reverse" m={2}>
          <Card>
            <List className={classes.root}>
              <CityList
                cities={cities}
                setCityDetails={setCityDetails}
                setCity={setCity}
              />
            </List>
          </Card>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Globe cities={cities} />
          <Button
            color="primary"
            variant="outlined"
            onClick={() => setCount(count + 1)}
          >
            Take me somewhere I can't go!
          </Button>
        </Box>
        <Box>
          {CityDetails && (
            <CityCard
              setCityDetails={setCityDetails}
              setCity={setCity}
              cities={cities}
            />
          )}
        </Box>
      </Box>
    </div>
  );
}

export default App;
