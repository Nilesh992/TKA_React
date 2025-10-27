import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("");

  const inputHandler = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <select onChange={inputHandler}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
      <div
        style={{
          marginTop: "20px",
          width: "150px",
          height: "100px",
          backgroundColor: color || "lightgray",
          border: "1px solid black",
        }}
      >
        {color ? `Selected: ${color}` : "No color selected"}
      </div>
    </div>
  );
}

export default ColorPicker;
