import React, { useState, useEffect } from "react";
import alertSound from "./test-sound.mp3";

export default function Timer() {
  const [minutes, setMinutes] = useState(1);
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

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      <div>{displayMessage && <div>Scoop the top layer of coffee!</div>}</div>
      <button onClick={() => handleStart()}>{start ? "Stop" : "Start"}</button>
      <div>
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  );
}
