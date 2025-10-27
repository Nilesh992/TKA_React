function ListRenderer({ items }) {
  if (!items || items.length === 0) {
    return <p>No items</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListRenderer;
