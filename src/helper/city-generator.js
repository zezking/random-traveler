import cities from "cities.json";

const randomCities = () => {
  for (let i = 0; i <= 5; i++) {
    return cities[Math.floor(Math.random() * cities.length)];
  }
};

const randomMarker = (cityObj) => {
  const markerId = markerIDgenerator();

  return {
    id: markerId,
    city: cityObj.name,
    coordinates: [cityObj.lat, cityObj.lng],
  };
};

const markerIDgenerator = () => {
  return Math.floor(Math.random() * 100);
};

export { randomCities, randomMarker };
