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
export default () => {
  return (
    <>
      <MantineProvider theme={theme}>
        <div className="container">
          <div>
            <HeroBullets />
          </div>
        </div>
      </MantineProvider>
    </>
  );
};
