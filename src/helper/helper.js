const randomCities = (citiesData, startIndex, endIndex) => {
  return citiesData[Math.floor(Math.random() * citiesData.length)];
};

const markerGenerator = (citiesData) => {
  const markerId = markerIDgenerator();

  return {
    id: markerId,
    city: citiesData.name,
    coordinates: [citiesData.lat, citiesData.lng],
  };
};

const markerIDgenerator = () => {
  return Math.floor(Math.random() * 100);
};

export { randomCities, markerGenerator };
