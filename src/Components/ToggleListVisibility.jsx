import React, { useState } from "react";

function ToggleListVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2>State Toggle List Visibility</h2>
      <button
        onClick={toggleHandler}
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        {isVisible ? "Hide List" : "Show List"}
      </button>

      {isVisible && (
        <ul style={{ marginTop: "15px", listStyleType: "none" }}>
          <li>Apple</li>
          <li>Banana</li>
          <li>Cherry</li>
        </ul>
      )}
    </div>
  );
}

export default ToggleListVisibility;
