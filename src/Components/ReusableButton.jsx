import React from "react";

function ReusableButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        margin: "5px"
      }}
    >
      {text}
    </button>
  );
}

export default ReusableButton;
