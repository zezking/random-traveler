import React, { useState } from "react";
//styles
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//routing
import { Link, Redirect } from "react-router-dom";
//cookies
import { useCookies } from "react-cookie";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  card: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
  },
  button: {
    backgroundColor: "white",
  },
  bottomText: {
    marginTop: theme.spacing(6),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const updateUser = (field, value) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  const submitUser = (event, userDetails) => {
    event.preventDefault();
    axios.post("/users/", { inputUser: userDetails }).then((res) => {
      const userData = res.data;
      setCookie("userData", userData, { path: "/" });
      console.log(userData);
    });
    console.log(userDetails);
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
            Register
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(event) => {
              submitUser(event, userDetails);
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) =>
                    updateUser("firstName", event.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  onChange={(event) =>
                    updateUser("lastName", event.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => updateUser("email", event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    updateUser("password", event.target.value)
                  }
                />
              </Grid>
            </Grid>
            <ButtonGroup
              fullWidth
              orientation="vertical"
              aria-label="outlined primary button group"
            >
              <Button type="submit" color="primary" className={classes.submit}>
                Sign up
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
            <Grid container justify="flex-end">
              <Grid item className={classes.bottomText}>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Card>
      <Button component={Link} to={"/"}></Button>
    </Container>
  );
}
