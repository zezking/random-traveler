import React, { useState, useEffect } from "react";

import cities from "cities.json";

const randomCities = () => {
  for (let i = 0; i <= 5; i++) {
    return cities[Math.floor(Math.random() * cities.length)];
  }
};

export { randomCities };
