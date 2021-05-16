import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "black",
  },
  appBar: {
    color: "black",
    background: "none",
    boxShadow: "none",
  },
  title: {
    flexGrow: 1,
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
      <CssBaseline />
      <AppBar position="relative" className={classes.appBar}>
        <Toolbar>
          <ButtonGroup className={classes.button}>
            <Button>Login</Button>
            <Button>Signup</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;
