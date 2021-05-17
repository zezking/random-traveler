const randomCities = (citiesData) => {
  return citiesData[Math.floor(Math.random() * citiesData.length)];
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
