import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Button } from "@mantine/core";
import { HeroBullets } from "./components/HeroBullets/HeroBullets";
const theme = createTheme({
  /** Put your mantine theme override here */
});
const App = () => (
  <MantineProvider theme={theme}>
    <div className="container">
      <div>
        <HeroBullets />
      </div>
    </div>
  </MantineProvider>
);
ReactDOM.render(<App />, document.getElementById("app"));
