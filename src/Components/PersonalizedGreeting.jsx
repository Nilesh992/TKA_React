import { useState } from "react";
import Greeting from "./Greeting";

function PersonalizedGreeting() {
  const [name, setName] = useState("Alice");

  return (
    <div>
      <Greeting name={name} />
      <button onClick={() => setName("Bob")}>Change Name</button>
    </div>
  );
}

export default PersonalizedGreeting;
