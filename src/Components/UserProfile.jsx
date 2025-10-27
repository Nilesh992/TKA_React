import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { name, age, email } = useParams();

  return (
    <div
      style={{
        border: "2px solid #888",
        borderRadius: "10px",
        padding: "20px",
        width: "250px",
        margin: "auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      {parseInt(age) >= 18 && <p style={{ color: "green" }}>Adult</p>}
    </div>
  );
}

export default UserProfile;
