import React from "react";
import ReactGlobe from "react-globe";

const options = {
  markerTooltipRenderer: (marker) => `${marker.city} (${marker.value})`,
};
const Globe = ({ city }) => {
  return (
    <ReactGlobe globeBackgroundTexture={null} height="47vh" width="60vw" />
  );
};

export default Globe;
