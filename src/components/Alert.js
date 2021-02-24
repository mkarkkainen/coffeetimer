import React from "react";
import soundFx from "./button-sound.mp3";

const Alert = () => {
  const sound = new Audio(soundFx);

  const handleClick = () => {
    sound.play();
  };
  return (
    <div>
      <button onClick={handleClick}>ALERT!</button>
    </div>
  );
};

export default Alert;
