import React from "react";
import ReusableButton from "./ReusableButton";

function ReusableButtonMain() {
  const handleSubmit = () => {
    alert("Submit button clicked!");
  };

  const handleDelete = () => {
    alert("Delete button clicked!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Reusable Button Component</h2>

      <ReusableButton text="Submit" onClick={handleSubmit} />
      <ReusableButton text="Delete" onClick={handleDelete} />
      <ReusableButton text="Update" onClick={() => alert("Update clicked!")} />
    </div>
  );
}

export default ReusableButtonMain;
