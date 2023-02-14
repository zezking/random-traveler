import * as React from "react";
import Dialog from "@mui/material/Dialog";

const Modal = (props: {
  children: React.ReactElement[] | React.ReactElement;
  open: boolean;
  onModalClose: () => void;
}) => {
  const { children, onModalClose, open } = props;

  return (
    <div>
      <Dialog maxWidth={"xs"} open={open} onClose={onModalClose}>
        {children}
      </Dialog>
    </div>
  );
};

export default Modal;
