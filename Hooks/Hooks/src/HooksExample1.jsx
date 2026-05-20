import React from "react";

const HooksExample1 = () => {
  let a = 20;
  function changeA() {
    console.log(a);
    a = 30;
    console.log(a);
  }
  return (
    <div>
      <h1>Value of a is {a}</h1>
      <button onClick={changeA}>Click</button>
    </div>
  );
};

export default HooksExample1;
