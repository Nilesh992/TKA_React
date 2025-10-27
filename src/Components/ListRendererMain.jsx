import { useState } from "react";
import ListRenderer from "./ListRenderer";

function ListRendererMain() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  return (
    <div>
      <h2>Fruit List</h2>
      <ListRenderer items={fruits} />
    </div>
  );
}

export default ListRendererMain;
