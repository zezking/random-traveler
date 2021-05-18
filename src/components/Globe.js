import React from "react";
import ReactGlobe from "react-globe";
import { randomMarker } from "../helper/helper";

const Globe = ({ city }) => {
  return (
    <ReactGlobe globeBackgroundTexture={null} height="80vh" width="80vw" />
  );
};

export default Globe;
