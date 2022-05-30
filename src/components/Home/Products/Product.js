import React, { useEffect, useState } from "react";
import Products from "./Products";

const Product = () => {
  const [products, setPorducts] = useState([]);
  useEffect(() => {
    fetch("https://still-scrubland-53446.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setPorducts(data));
  }, []);
  return (
    <div className="container mt-3">
      <h1 className="text-center">Products</h1>
      {products?.map((product) => (
        <Products key={product._id} product={product}></Products>
      ))}
    </div>
  );
};

export default Product;
