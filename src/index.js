import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/core";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import colors from "./theme/colors";

import App from "./App";

import "./index.css";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#252422",
        color: "white",
      },
    },
  },
  colors,
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
