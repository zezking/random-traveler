import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import PublicIcon from "@material-ui/icons/Public";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
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
});
const Navigation = ({ cities }) => {
  console.log(cities);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="space-between">
        <PublicIcon fontSize="large" />
        <Autocomplete
          id="Search"
          options={cities}
          getOptionLabel={(city) => city.properties.NAME}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Search city" variant="outlined" />
          )}
        />
        <Box>
          <ButtonGroup className={classes.button}>
            <Button>Login</Button>
            <Button>Signup</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </div>
  );
};

export default Navigation;
