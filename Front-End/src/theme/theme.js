import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",

      backgroundColor: "white",
      color: "black",
    },
  },

  navigation: {
    height: "20%",
  },

  main: {
    height: "80%",
  },
});
