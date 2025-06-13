import React from "react";
import Text from "../Text";
import { useCount } from "../../context/countContext";

// This is a button component that will be used to increment the count in the Text component
const Button = () => {
  const { count, setCount } = useCount();
  const onButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={onButtonClick}>Click to increment</button>
      <Text />
    </div>
  );
};

export default Button;
