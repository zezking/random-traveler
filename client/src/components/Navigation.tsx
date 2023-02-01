import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import PublicIcon from "@material-ui/icons/Public";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Typography } from "@material-ui/core";
//contains a search input, two buttons, one login, one sign up
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
  },
  appBar: {
    color: "black",
    background: "none",
    boxShadow: "none",
  },
  button: {
    backgroundColor: "white",
    color: "black",
  },

  welcomeText: {
    margin: theme.spacing(2),
    color: "white",
  },
  icon: {
    color: "white",
  },
}));

const LogOut = ({ cookie, removeCookie, classes }) => {
  const { first_name, last_name } = cookie.userData;
  return (
    <>
      <Typography className={classes.welcomeText}>
        Welcome {`${first_name} ${last_name}`}
      </Typography>
      <Button
        className={classes.button}
        onClick={() => removeCookie("userData")}
      >
        Logout
      </Button>
    </>
  );
};
const Login = ({ classes }) => {
  return (
    <ButtonGroup className={classes.button}>
      <Button component={Link} to={"/"}>
        Home
      </Button>
      <Button component={Link} to={"/login"}>
        Login
      </Button>
      <Button component={Link} to={"/register"}>
        Register
      </Button>
    </ButtonGroup>
  );
};
const Navigation = ({ cities, setCity, setOpenCityCard }) => {
  const [cookie, setCookie, removeCookie] = useCookies(["userData"]);
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} sm={12} md={4}>
        <PublicIcon fontSize="large" className={classes.icon} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Autocomplete
          id="Search"
          options={cities}
          getOptionLabel={(city) => city.properties.NAME}
          className={classes.autocomplete}
          renderInput={(params) => (
            <TextField {...params} label="Search city" variant="outlined" />
          )}
          onChange={(event, value) => {
            setCity(value);
            setOpenCityCard(true);
          }}
        />
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={6}
        md={4}
        direction="row"
        alignItems="center"
      >
        {cookie.userData && (
          <LogOut
            cookie={cookie}
            removeCookie={removeCookie}
            classes={classes}
          />
        )}
        {!cookie.userData && <Login classes={classes} />}
      </Grid>
    </>
  );
};

export default Navigation;
