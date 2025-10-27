import React from "react";

function ConditionalRenderer({ isLoggedIn }) {
  return (
    <div
      style={{
        border: "2px solid #ccc",
        padding: "15px",
        width: "250px",
        margin: "20px auto",
        borderRadius: "8px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>{isLoggedIn ? "Welcome back!" : "Please log in"}</h3>
    </div>
  );
}

export default ConditionalRenderer;
