import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { randomCities } from "./helper/city-generator";
import Globe from "./components/Globe.js";
import { Button, Typography } from "@material-ui/core";

function App() {
  const [city, setCity] = useState(null);
  const [count, setCount] = useState(0);
  const citiesData = randomCities();
  useEffect(() => {
    setCity(citiesData);
  }, [count]);
  return (
    <div className="App">
      <Navigation />
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Random City
      </Button>
      {city && <h1>{city.lat}</h1>}
    </div>
  );
}

export default App;
