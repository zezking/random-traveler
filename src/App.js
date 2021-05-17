import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";

import List from "@material-ui/core/List";
import City from "./components/City";
import Globe from "./components/Globe.js";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
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
        <Box
          display="flex"
          flexDirection="row-reverse"
          justifyContent="space-between"
        >
          <List className={classes.root}>
            <City cities={cities} />
          </List>
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
      </Box>
    </div>
  );
}

export default App;
