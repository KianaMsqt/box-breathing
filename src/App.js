import { useState } from "react";

import "./App.css";
import Intro from "./components/Intro";
import Box from "./components/Box";

function App() {
  const [startBreathing, setStartBreathing] = useState(false);

  const handleStartClick = () => {
    setStartBreathing(true);
  };

  return (
    <div className="App">
      <h1>
        <strong>Box Breathing</strong>
      </h1>
      <main>
        {!startBreathing ? <Intro onStartClick={handleStartClick} /> : <Box />}
      </main>
    </div>
  );
}

export default App;
