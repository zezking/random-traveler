import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./components/App";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <CookiesProvider>
    <CssBaseline />
    <App />
  </CookiesProvider>,
  document.querySelector("#root")
);
