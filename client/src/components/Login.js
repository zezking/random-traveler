import React, { useState } from "react";
//styles
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//routing
import { Redirect, Link } from "react-router-dom";
//cookies
import { useCookies } from "react-cookie";
//fetch Data
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  card: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
  },
  bottomText: {
    marginTop: theme.spacing(6),
  },
}));

export default function Login() {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(["userData"]);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const submitUser = (event, userDetails) => {
    event.preventDefault();
    axios.post(`/login`, { inputUser: userDetails }).then((res) => {
      const userData = res.data;
      setCookie("userData", userData, { path: "/" });
    });
  };

  const updateUser = (field, value) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {cookies.userData && <Redirect to="/" />}

      <Card className={classes.card}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form
            className={classes.form}
            onSubmit={(event) => submitUser(event, userDetails)}
            noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => updateUser("email", event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => updateUser("password", event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ButtonGroup
              fullWidth
              orientation="vertical"
              aria-label="outlined primary button group"
            >
              <Button type="submit" color="primary" className={classes.submit}>
                Login
              </Button>
              <Button
                color="primary"
                className={classes.submit}
                component={Link}
                to={"/"}
              >
                Back
              </Button>
            </ButtonGroup>
            <Grid container>
              <Grid item className={classes.bottomText}>
                <Link to="/register">{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Card>
    </Container>
  );
}
