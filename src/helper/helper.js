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

const continentSlicer = (str) => {
  console.log(str);
  let indexOfSlash = "";
  [...str].forEach((c, index) => {
    if (c === "/") {
      indexOfSlash = index;
    }
  });

  return str.slice(0, indexOfSlash);
};

export { randomCities, markerGenerator, continentSlicer };
