import React from "react";
import Modal from "@material-ui/core/Modal";
const Error = ({ errorMessage }) => {
  return <Modal>{errorMessage}</Modal>;
};

export default Error;
