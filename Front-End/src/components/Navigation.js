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
const useStyles = makeStyles({
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

  icon: {
    color: "white",
  },
});

const LogOut = ({ cookie, removeCookie }) => {
  const { first_name, last_name } = cookie.userData;
  return (
    <>
      <Typography> Welcome {`${first_name} ${last_name}`}</Typography>
      <Button>
        <Link onClick={() => removeCookie("userData")}>Logout</Link>
      </Button>
    </>
  );
};
const Login = () => {
  return (
    <>
      <Button>
        <Link to="/">Home</Link>
      </Button>
      <Button>
        <Link to="/login">Login</Link>
      </Button>
      <Button>
        <Link to="/register">Register</Link>
      </Button>
    </>
  );
};
const Navigation = ({ cities }) => {
  const [cookie, setCookie, removeCookie] = useCookies(null);
  console.log(cookie);
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
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search city" variant="outlined" />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ButtonGroup className={classes.button}>
          {cookie.userData && (
            <LogOut cookie={cookie} removeCookie={removeCookie} />
          )}
          {!cookie.userData && <Login />}
        </ButtonGroup>
      </Grid>
    </>
  );
};

export default Navigation;
