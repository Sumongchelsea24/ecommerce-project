import React from "react";
import { useState } from "react";
import { use } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  function increaseNum() {
    setNum(num + 1);
    console.log("increasing");
  }
  function decreaseNum() {
    setNum(num - 1);
    console.log("decreasing");
  }
  function jump5Num() {
    setNum(num + 5);
    console.log("decreasing");
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jump5Num}>Jump by 5</button>
    </div>
  );
};

export default Counter;
