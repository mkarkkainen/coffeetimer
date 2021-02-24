import React from "react";
import Sound from "./button-sound.mp3";
import useSound from "use-sound";

const Alert = () => {
  const [play] = useSound(Sound);

  return <button onClick={play}>Boop!</button>;
};

export default Alert;
