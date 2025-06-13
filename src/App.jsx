import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0)

  const onButtonClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      <Button count={count} onButtonClick={onButtonClick} />
    </div>
  );
};

export default App;
