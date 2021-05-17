import React from "react";
import ReactGlobe from "react-globe";
import { randomMarker } from "../helper/helper";

const Globe = ({ city }) => {
  console.log(randomMarker(city));
  return (
    <ReactGlobe globeBackgroundTexture={null} height="50vh" width="50vw" />
  );
};

export default Globe;
