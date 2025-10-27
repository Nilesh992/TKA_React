import Child from "./Child";

function Parent() {
  const data = ["Item1", "Item2"];

  return (
    <div>
      <h2>Parent Component</h2>
      {data.map((item, index) => (
        <Child key={index} item={item} />
      ))}
    </div>
  );
}

export default Parent;
