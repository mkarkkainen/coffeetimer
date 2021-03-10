import React, { createContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { Typography, Grid } from "@material-ui/core";

export const phaseOneContext = createContext();
export const phaseTwoContext = createContext();

const Customizer = (props) => {
  const [phaseOneLength, setPhaseOneLength] = useState(4);

  const [phaseTwoLength, setPhaseTwoLength] = useState(6);

  console.log(props.children)

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <phaseOneContext.Provider value={phaseOneLength}>
        <phaseTwoContext.Provider value={phaseTwoLength}>
          {props.children}
        </phaseTwoContext.Provider>
      </phaseOneContext.Provider>
      <Grid item>
        <Typography>Phase One: {phaseOneLength}</Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          onClick={() =>
            setPhaseOneLength((prevLength) =>
              prevLength === 0 ? 0 : prevLength - 1
            )
          }
        >
          -
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => setPhaseOneLength(phaseOneLength + 1)}
        >
          +
        </Button>
      </Grid>
      <Grid item>
        <Typography>Brewing Stage: {phaseTwoLength}</Typography>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          onClick={() =>
            setPhaseTwoLength((prevLength) =>
              prevLength === 0 ? 0 : prevLength - 1
            )
          }
        >
          -
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={() => setPhaseTwoLength(phaseTwoLength + 1)}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default Customizer;
