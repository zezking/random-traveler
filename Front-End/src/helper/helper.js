const randomCity = (citiesData) => {
  return citiesData[Math.floor(Math.random() * citiesData.length)];
};

const markerGenerator = (citiesData) => {
  const markerId = markerIDgenerator();

  // return {
  //   id: markerId,
  //   city: citiesData.properties.NAME,
  //   coordinates: [citiesData.lat, citiesData.lng],
  // };
};

const markerIDgenerator = () => {
  return Math.floor(Math.random() * 100);
};

const makerColorGenerator = () => {
  const colors = ["blue", "yellow", "white", "red", "orange"];

  return colors[Math.floor(Math.random() * colors.length)];
};

const continentSlicer = (str) => {
  let indexOfSlash = "";
  [...str].forEach((c, index) => {
    if (c === "/") {
      indexOfSlash = index;
    }
  });

  return str.slice(0, indexOfSlash);
};

export { randomCity, markerGenerator, continentSlicer };
