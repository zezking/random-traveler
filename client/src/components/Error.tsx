import React from "react";
import Modal from "@material-ui/core/Modal";
import { Typography } from "@material-ui/core";
const Error = (props: { errorMessage: string; open: boolean }) => {
  const { errorMessage, open } = props;

  return (
    <Modal open={open}>
      <Typography>{errorMessage}</Typography>
    </Modal>
  );
};

export default Error;
