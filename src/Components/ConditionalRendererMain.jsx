import React, { useState } from "react";
import ConditionalRenderer from "./ConditionalRenderer";

function ConditionalRendererMain() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Props Conditional Renderer</h2>
      <ConditionalRenderer isLoggedIn={isLoggedIn} />
      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Toggle Login
      </button>
    </div>
  );
}

export default ConditionalRendererMain;
