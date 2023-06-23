import Home from "../Home/Home";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./ShoppingCart.css";
import { useParams } from "react-router-dom";



export default function ShoppingCart({ shoppingList }) {
  console.log(shoppingList);
  return (
    <div className="shopping-cart">
      {shoppingList?.length === 0 ? (
        <p>Nothing in the cart</p>
      ) : (
        shoppingList?.map((item) => {
          return (
            <span className="shopping-cart-item" key={item.id}>
              <p>Item name: {item.name}</p>
              <p>Item quantity: {item.quantity}</p>
              <p>Item price: {item.price.toFixed(2)}</p>
              <p>Item total: {(item.price * item.quantity).toFixed(2)}</p>
            </span>
          );
        })
      )}
    </div>
  );
}

