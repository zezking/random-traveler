import React from "react";
import ReactDOM from "react-dom";
import { CookiesProvider } from "react-cookie";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  document.querySelector("#root")
);
