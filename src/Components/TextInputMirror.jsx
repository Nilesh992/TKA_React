import React, { useState } from "react";

function TextInputMirror() {
  const [text, setText] = useState("");

  const inputHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>State Text Input Mirror</h2>
      <input
        type="text"
        value={text}
        onChange={inputHandler}
        placeholder="Type something..."
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "6px",
          border: "1px solid #888",
        }}
      />
      <p style={{ marginTop: "15px", fontSize: "18px" }}>{text}</p>
    </div>
  );
}

export default TextInputMirror;
