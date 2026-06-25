import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // यदि counter को भ्यालु २० भन्दा कम छ भने मात्र १ थप्ने
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("Value cannot exceed 20");
    }
  };

  const removeValue = () => {
    // यदि counter को भ्यालु ० भन्दा बढी छ भने मात्र १ घटाउने
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Value cannot be negative");
    }
  };

  return (
    <>
      <h1>Hello This is Counter project</h1>
      <h2>Counter value: {counter}</h2>

      {/* यदि भ्यालु २० पुग्यो भने बटनलाई disable पनि गर्न सक्नुहुन्छ (Optional) */}
      <button onClick={addValue} disabled={counter === 20}>
        Add value {counter}
      </button>
      <br />

      {/* यदि भ्यालु ० पुग्यो भने बटनलाई disable गर्न (Optional) */}
      <button onClick={removeValue} disabled={counter === 0}>
        Remove value {counter}
      </button>
    </>
  );
}

export default App;
