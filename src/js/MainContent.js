import React from "react"; // Importing React to use JSX and state

export default function MainContent() {
  // Initializing state with a default value of 0 for the counter
  const [count, setCount] = React.useState(0);

  // Function to increment the count when the "+" button is clicked
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  // Function to decrement the count when the "–" button is clicked
  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  // Rendering the counter UI with increment and decrement buttons
  return (
    <div className="counter">
      {/* Button to decrease the count */}
      <button className="counter--minus" onClick={subtract}>
        –
      </button>

      {/* Displaying the current count */}
      <div className="counter--count">
        <h1>{count}</h1>
      </div>

      {/* Button to increase the count */}
      <button className="counter--plus" onClick={add}>
        +
      </button>
    </div>
  );
}
