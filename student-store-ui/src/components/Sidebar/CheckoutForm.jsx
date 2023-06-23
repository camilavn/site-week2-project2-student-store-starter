import Home from "../Home/Home";
import { useState } from "react";
import ShoppingCart from "../Shopping Cart/ShoppingCart";
import { useParams } from "react-router-dom";
import "./CheckoutForm.css";
import Sidebar from "./Sidebar";

export default function CheckoutForm({ shoppingList, isOpen, checkoutForm, setCheckoutForm, handleOnSubmitCheckoutForm, handleOnCheckoutFormChange, products}) {
    
  const { email, name } = checkoutForm;

  function checkout(e) {
    e.preventDefault();
    // setCheckoutForm({ email: "", name: "" });
  }

  // if checkoutform is null, if not null, then 
  // return  
    if(checkoutForm === null) {
    return (
      <div className={`checkout-form ${isOpen ? 'open' : 'closed'}`}>
        <form onSubmit={handleOnSubmitCheckoutForm}>
          <input
            type="email"
            name="email"
            className="checkout-form-input"
            placeholder="student@codepath.org"
            value={email}
            onChange={handleOnCheckoutFormChange}
          />
          <input
            type="text"
            name="name"
            className="checkout-form-input"
            placeholder="Student Name"
            value={name}
            onChange={handleOnCheckoutFormChange}
          />
          <button type="submit" className="checkout-button" onClick={checkout}>
            Checkout
          </button>
        </form>
        {shoppingList?.quantity > 0 && <p className="error">Error: Something went wrong with the checkout.</p>}
        {shoppingList?.quantity === 0 && <p className="success">Success! Your order has been placed.</p>}
      </div>
    );
    } else {
      return (
        <>
        <div className={`checkout-form ${isOpen ? 'open' : 'closed'}`}>
        <form onSubmit={handleOnSubmitCheckoutForm}>
          <input
            type="email"
            name="email"
            className="checkout-form-input"
            placeholder="student@codepath.org"
            value={email}
            onChange={handleOnCheckoutFormChange}
          />
          <input
            type="text"
            name="name"
            className="checkout-form-input"
            placeholder="Student Name"
            value={name}
            onChange={handleOnCheckoutFormChange}
          />
          <button type="submit" className="checkout-button" onClick={checkout}>
            Checkout
          </button>
        </form>
        {shoppingList?.quantity > 0 && <p className="error">Error: Something went wrong with the checkout.</p>}
        {shoppingList?.quantity === 0 && <p className="success">Success! Your order has been placed.</p>}
        <section className="checkedOut">
          <h1>Receipt</h1>
          <p>Name: {checkoutForm.name}</p>
          <p>Email: {checkoutForm.email}</p>
          {shoppingList?.map((item) => (
            <span className="shoppingCartItem" key={item.id}>
              <p>Item name: {item.name}</p>
              <p>Item quantity: {item.quantity}</p>
              <p>Item price: {item.price.toFixed(2)}</p>
              <p>Item total: {(item.price * item.quantity).toFixed(2)}</p>
              {/* <p>Total: {finalTotal.toFixed(2)}</p> */}
            </span>
        ))}
        </section>
        </div>
        </>
      )
    }
}
  
  