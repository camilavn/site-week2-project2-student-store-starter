import Home from "../Home/Home";
import { useState } from "react";
import ShoppingCart from "../Shopping Cart/ShoppingCart";
import { useParams } from "react-router-dom";
import "./CheckoutForm.css";
import Sidebar from "./Sidebar";

export default function CheckoutForm({ shoppingList, isOpen, checkoutForm, setCheckoutForm, handleOnSubmitCheckoutForm, handleOnCheckoutFormChange }) {
    
  const { email, name } = checkoutForm;
  
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
          <button type="submit" className="checkout-button">
            Checkout
          </button>
        </form>
        {shoppingList?.quantity > 0 && <p className="error">Error: Something went wrong with the checkout.</p>}
        {shoppingList?.quantity === 0 && <p className="success">Success! Your order has been placed.</p>}
      </div>
    );
  }
  
  