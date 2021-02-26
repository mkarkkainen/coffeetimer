import React, { useContext, useEffect, useState } from "react";
import { phaseTwoContext, phaseOneContext } from "./Customizer.js";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Timer = () => {
  const [timerLength, setTimerLength] = useState(4);
  const [timerOn, setTimerOn] = useState(false);
  const [timerDone, setTimerDone] = useState(false);

  const [sessionType, setSessionType] = useState("phaseOne");

  const phaseTwoLength = useContext(phaseTwoContext);
  const phaseOneLength = useContext(phaseOneContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn) {
        setTimerLength((timerLength) => timerLength - 1);
      }
    }, 1000);
    if (timerOn) {
      setTimerDone(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  useEffect(() => {
    if (timerLength === 0) {
      setTimerOn(false);
      setTimerDone(true);
      setSessionType((prevType) => {
        if (prevType === "phaseOne") return "phaseTwo";
        if (prevType === "phaseTwo") return "phaseOne";
      });
    }
  }, [timerLength]);

  useEffect(() => {
    if (sessionType === "phaseOne") {
      setTimerLength(phaseOneLength * 60);
    }
  }, [phaseOneLength, sessionType]);

  useEffect(() => {
    if (sessionType === "phaseTwo") {
      setTimerLength(phaseTwoLength * 60);
    }
  }, [phaseTwoLength, sessionType]);

  useEffect(() => {
    if (sessionType === "phaseOne" && timerDone) {
      console.log("Your coffee is done!!");
    }
    if (sessionType === "phaseTwo" && timerDone) {
      console.log("Scoop!!");
    }
  }, [sessionType, timerDone]);

  return (
    <>
      <div>
        <Typography variant="h3" align="center">
          {new Date(timerLength * 1000).toISOString().substr(14, 5)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            setTimerOn(!timerOn);
            console.log("play started sound");
          }}
        >
          {timerOn ? "Pause" : "Run"}
        </Button>
      </div>
    </>
  );
};

export default Timer;
