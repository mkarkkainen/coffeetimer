import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import alertSound from "./test-sound.mp3";
import { Typography, Container, Grid, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Timer() {
  const classes = useStyles();

  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [start, setStart] = useState(false);

  const sound = new Audio(alertSound);

  const playSound = () => sound.play();

  useEffect(() => {
    if (start && seconds >= 0) {
      let interval = setInterval(() => {
        clearInterval(interval);
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            setDisplayMessage(!displayMessage);
            setStart(!start);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [start, seconds]);

  useEffect(() => {
    if (displayMessage) {
      playSound();
      setSeconds(0);
      setMinutes(6);
    }
  }, [displayMessage]);

  const handleStart = () => {
    setStart(!start);
    setDisplayMessage(false);
  };

  const handleReset = () => {
    setStart(false);
    setDisplayMessage(false);
    setMinutes(4);
    setSeconds(0);
  };

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {timerMinutes}:{timerSeconds}
        </Typography>

        <Grid container spacig={2} justify="center">
          <Grid item>
            <div>
              {displayMessage && (
                <Typography>Scoop the top layer of coffee!</Typography>
              )}
            </div>
          </Grid>
          <Grid item>
            <Button
              onClick={() => handleStart()}
              variant="contained"
              color="primary"
            >
              {start ? "Stop" : "Start"}
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => handleReset()}
              variant="outlined"
              color="secondary"
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
