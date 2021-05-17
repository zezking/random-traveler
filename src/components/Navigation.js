import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Box from "@material-ui/core/Box";
import Icon from "@material-ui/core/Icon";
import PublicIcon from "@material-ui/icons/Public";
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
const Navigation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" justifyContent="flex-end">
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
