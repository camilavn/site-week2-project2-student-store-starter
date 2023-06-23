import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function ProductCard({shoppingList, setShoppingList, product }) {

  function addItems(e) {
    const existingProd = shoppingList?.find((item) => item.id === product.id);
    if (existingProd) {
      const updatedProd = shoppingList.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      })
      setShoppingList(updatedProd);
    } else {
      setShoppingList([...shoppingList, { ...product, quantity: 1 }]);
    }
    // console.log(shoppingList);
  }

  function deleteItems(product) {
    const existingProd = shoppingList?.find((item) => item.id === product.id);
    if (existingProd) {
      const updatedProd = shoppingList.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
      setShoppingList(updatedProd);
    } else {
      setShoppingList([...shoppingList, { ...product, quantity: 1 }]);
    }
      // console.log(shoppingList);
  }


  return (
    <>
    <div
          className="product-card"
          style={{
            border: "1px solid black",
            margin: "10px",
          }}>
      <Link to={"products/" + product.id} key={product.id}>
          <img src={product.image} alt={product.name}></img>
          <p>{product.name}</p>
          <p>
            {product.price.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
            })} 
          </p>
      </Link>
      <button onClick={(e) => addItems(e)} > + </button>
      <button onClick={(e) => deleteItems(e)} > - </button>  
      </div>    
    </>
  );
}
