import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Slider } from "@material-ui/core";

const useStyles = makeStyles({
  slider: {
    width: 300
  }
});

const Ratio = () => {
  const classes = useStyles();
  const [params, setParams] = useState({ water: 0, coffee: 0, ratio: 16 });

  const marks = [
    {
      value: 15,
      label: "1:15"
    },
    {
      value: 16,
      label: "1:16"
    },
    {
      value: 17,
      label: "1:17"
    }
  ];

  const updateWater = (ev) =>
    setParams({
      ...params,
      water: ev.target.value,
      coffee: (ev.target.value / params.ratio).toFixed(2)
    });

  const updateCoffee = (ev) =>
    setParams({
      ...params,
      water: (ev.target.value * params.ratio).toFixed(2),
      coffee: ev.target.value
    });

    const handleChange = (ev, newRatio) => {
      setParams({
        ...params,
        water: (params.coffee * newRatio),
        coffee: (params.coffee),
        ratio: newRatio
      });
    }

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography>The Ratio Calculator</Typography>

        <Grid item>
          <Slider
            className={classes.slider}
            defaultValue={16}
            aria-labelledby="discrete-slider"
            step={1}
            marks={marks}
            min={15}
            max={17}
            value={params.ratio}
            onChange={handleChange}
          />
        </Grid>

        <Grid item>
          <label>Coffee (g)</label>
          <input
            type="number"
            value={params.coffee}
            onChange={updateCoffee}
          ></input>
        </Grid>

        <Grid item>
          <label>Water (ml)</label>
          <input
            type="number"
            value={params.water}
            onChange={updateWater}
          ></input>
        </Grid>
      </Grid>
    </div>
  );
};

export default Ratio;
