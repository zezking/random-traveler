import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { randomCities } from "./helper/city-generator";
import City from "./components/City";
import Globe from "./components/Globe.js";
import { Button, Typography } from "@material-ui/core";

function App() {
  const [city, setCity] = useState({});
  const [count, setCount] = useState(0);
  const citiesData = randomCities();
  useEffect(() => {
    setCity(citiesData);
  }, [count]);
  return (
    <div className="App">
      <Navigation />
      <Button
        color="primary"
        variant="outlined"
        onClick={() => setCount(count + 1)}
      >
        Give me somewhere I can't go!
      </Button>
      <City city={city} />
      <Globe city={city} />
    </div>
  );
}

export default App;
