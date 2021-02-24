import React from "react";
import Count from "./Count";

export default function App() {
  return (
    <div className="App">
      <Count
        title="4 Minutes"
        time={4 * 60}
        completionMessage="Scoop top layer of floating coffee"
      />

      <Count
        title="6 Minutes"
        time={6 * 60}
        completionMessage="Coffee is done!"
      />
    </div>
  );
}
