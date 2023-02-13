import * as React from "react";
import Modal from "../components/UI/Modal";
import {
  Avatar,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
const LoginForm = (props: { open: boolean; onLoginFormClose: () => void }) => {
  const { onLoginFormClose, open } = props;

  return (
    <Modal open={open} onModalClose={onLoginFormClose}>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <DialogTitle textAlign={"center"}>Register</DialogTitle>
      </Box>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="name"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          variant="outlined"
        />
        <TextField
          margin="dense"
          id="confirm-password"
          label="Confirm Password"
          type="confirm-password"
          fullWidth
          variant="outlined"
        />
        <DialogActions>
          <Button onClick={onLoginFormClose}>Cancel</Button>
          <Button variant="contained">Register</Button>
        </DialogActions>
      </DialogContent>
    </Modal>
  );
};

export default LoginForm;
