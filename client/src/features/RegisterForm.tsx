import React, { useState } from "react";
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
import axios from "axios";

const RegisterForm = (props: {
  open: boolean;
  onRegisterFormClose: () => void;
}) => {
  const { onRegisterFormClose, open } = props;
  const [formError, setFormError] = useState<boolean>(false);
  const [validationMsg, setValidationMsg] = useState<string>("");

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const valid = formValidation(data);

    if (valid) {
      data.delete("confirmPassword");
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
          data
        );
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const formValidation = (formData: FormData) => {
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password!.toString() !== confirmPassword!.toString()) {
      setFormError(true);
      setValidationMsg("Please confirm you have entered the same password");
      return false;
    }
    if (
      password!.toString().length <= 6 ||
      confirmPassword!.toString().length <= 6
    ) {
      setFormError(true);
      setValidationMsg(
        "Please make sure your password is longer than 6 characters"
      );
      return false;
    }
    setFormError(false);
    setValidationMsg("");
    return true;
  };
  return (
    <Modal open={open} onModalClose={onRegisterFormClose}>
      <Box
        component="form"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={submitHandler}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <DialogTitle textAlign={"center"}>Register</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="normal"
            id="name"
            name="name"
            label="Name"
            type="name"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="normal"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            margin="normal"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
          <TextField
            required
            error={formError}
            margin="normal"
            id="confirm-password"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="outlined"
            helperText={validationMsg}
          />
          <DialogActions>
            <Button onClick={onRegisterFormClose}>Cancel</Button>
            <Button variant="contained" type="submit">
              Register
            </Button>
          </DialogActions>
        </DialogContent>
      </Box>
    </Modal>
  );
};

export default RegisterForm;
