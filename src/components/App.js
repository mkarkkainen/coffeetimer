import React from "react";
import Timer from "./Timer";
import Customizer from "./Customizer.js";

import { Typography } from "@material-ui/core";

export default function App() {
  return (
    <div className="App">
      <Typography variant="h3" align="center">
        Coffee Timer
      </Typography>
      <Customizer>
        <Timer />
      </Customizer>
    </div>
  );
}
