import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter((prev) => prev + 1);
  };

  const subtract = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="mt-5 px-3 py-4">
      <h1>Counter component</h1>
      <h2 className="h1 display-1 mt-5 mb-3">{counter}</h2>
      <div className="mt-5">
        <button
          className="btn btn-primary btn-lg mx-3 px-5 py-3 mt-2"
          onClick={add}
        >
          Add
        </button>
        <button
          className="btn btn-danger btn-lg mx-3 px-5 py-3 mt-2"
          onClick={subtract}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Counter;
