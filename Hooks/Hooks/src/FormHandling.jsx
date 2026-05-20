import React, { useState } from "react";

export const FormHandling = () => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.lot("Form Submitted by");

    setTitle("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        action=""
      >
        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
