import React from "react";

function ProductList({ products }) {
  return (
    <div
      style={{
        border: "2px solid #aaa",
        borderRadius: "10px",
        padding: "20px",
        width: "300px",
        margin: "auto",
        backgroundColor: "#f2f2f2",
      }}
    >
      <h3>Product List</h3>
      {products.length > 0 ? (
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              {item.id}: {item.name}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red" }}>No products available</p>
      )}
    </div>
  );
}

export default ProductList;
