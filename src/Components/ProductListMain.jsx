import React from "react";
import ProductList from "./ProductList";

function ProductListMain() {
  const products = [
    { id: 1, name: "Book" },
    { id: 2, name: "Pen" },
    { id: 3, name: "Notebook" },
  ];

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default ProductListMain;
