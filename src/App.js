import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";

import City from "./components/City";
import Globe from "./components/Globe.js";
import { Box, Button, Typography } from "@material-ui/core";
import axios from "axios";

function App() {
  const [cities, setCities] = useState({});
  const [count, setCount] = useState(0);
  const [cityWiki, setCitiWiki] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_populated_places.geojson`
      )
      .then((data) => {
        setCities([...data.data.features]);
      });
  }, [count]);

  return (
    <div className="App">
      <Navigation />
      <Button
        color="primary"
        variant="outlined"
        onClick={() => setCount(count + 1)}
      >
        Take me somewhere I can't go!
      </Button>
      <Box
        display="flex"
        flexDirection="row-reverse"
        justifyContent="space-between"
      >
        <City cities={cities} />
        <Globe cities={cities} />
      </Box>
    </div>
  );
}

export default App;
