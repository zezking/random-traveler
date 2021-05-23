import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },

  navigation: {
    height: "20%",
  },

  main: {
    height: "80%",
  },
});

export default theme;
