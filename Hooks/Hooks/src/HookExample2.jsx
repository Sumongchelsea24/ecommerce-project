import React from "react";
import { useState } from "react";

const HookExample2 = () => {
  const [num, setNum] = useState(10);
  const [username, setUsername] = useState("Sujan");
  function changeNum() {
    setNum(30);
    setUsername("Chelsea");
  }
  return (
    <div>
      <h1>
        Value of num is {num} <br /> User name is {username}{" "}
      </h1>
      <button onClick={changeNum}>Click</button>
    </div>
  );
};

export default HookExample2;
