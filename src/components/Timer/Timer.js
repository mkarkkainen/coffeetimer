import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Timer2 = (props) => {
  const [timerLength, setTimerLength] = useState(props.length);
  const [timerOn, setTimerOn] = useState(false);
  const [timerDone, setTimerDone] = useState(false);


  useEffect(() => {
    const interval = setInterval(() => {
      if (timerOn) {
        setTimerLength((timerLength) => timerLength - 1);
      }
    }, 10);
    if (timerOn) {
      setTimerDone(false);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

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
          }}
        >
          {timerOn ? "Pause" : "Run"}
        </Button>
      </div>
    </>
  );
};

export default Timer2;
