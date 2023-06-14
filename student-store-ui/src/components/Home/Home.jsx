import * as React from "react";
import "./Home.css";

export default function Home({ products }) {
  return (
    <div className="home">
      <div className="product-container">
      {products?.map((product) => {
        return (
          <div className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}
