import React, { useEffect, useState } from "react";
import alertSound from "./button-sound.mp3";

const Count = (props) => {
  const [count, setCount] = useState(props.time);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [start, setStart] = useState(false);

  const sound = new Audio(alertSound);

  useEffect(() => {
    if (start && count >= 0) {
      const secsLeft = setInterval(() => {
        setCount((c) => c - 1);
        let timeLeft = secondsToTime(count);
        setMinute(timeLeft.m);
        setSecond(timeLeft.s);
      }, 1000);
      return () => {
        clearInterval(secsLeft);
      };
    } else {
      console.log(props.completionMessage);
    }

    sound.play();
    // we keep track when to rerender the hook, aka when the start is changed to true
  }, [start, count]);

  const secondsToTime = (secs) => {
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    return {
      m: minutes,
      s: seconds,
    };
  };

  return (
    <div>
      <h3>{props.title}</h3>
      <p>
        {minute < 9 ? "0" + minute : minute} :{" "}
        {second < 9 ? "0" + second : second}
      </p>

      {start ? (
        <button onClick={() => setStart(false)}>Stop</button>
      ) : (
        <button onClick={() => setStart(true)}>Start</button>
      )}
    </div>
  );
};

export default Count;
