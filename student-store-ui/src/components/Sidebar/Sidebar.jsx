import * as React from "react";
import "./Sidebar.css";
import { Outlet } from "react-router-dom";
import ShoppingCart from "../Shopping Cart/ShoppingCart";
import { useState } from "react";

export default function Sidebar() {

  const [isOpen, setIsOpen] = useState(null);


  return (

    <section className="sidebar">
      <button className="toggle-button button closed">
              <i className="material-icons md-48">arrow_forward</i>
            </button>

      { !isOpen ? (
        <section className="sidebarclosed">
          <div className="wrapper">
            <button onClick={() =>{setIsOpen(!isOpen)}} className="toggle-button button closed">
              <i className="material-icons md-48">arrow_forward</i>
            </button>
            <div className="shopping-cart">
              <div className="cart-icons">
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">add_shopping_cart</i>
                </span>
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">monetization_on</i>
                </span>
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">fact_check</i>
                </span>
              </div>
            </div>
          </div>
        </section>
      )
      :
      (
        <section className="sidebaropen">
          <div className="wrapper">
            <button className="toggle-button button open" onClick={() =>{setIsOpen(!isOpen)}}>
              <i className="material-icons md-48">arrow_forward</i>
            </button>
            <div className="shopping-cart">
              <div className="open">
                <h3 className="">
                  Shopping Cart{" "}
                  <ShoppingCart />
                  <span className="button">
                    <i className="material-icons md-48">add_shopping_cart</i>
                  </span>
                </h3>
                <div className="checkout-form">
                  <h3 className="">
                    Payment Info{" "}
                    <span className="button">
                      <i className="material-icons md-48">monetization_on</i>
                    </span>
                  </h3>
                  <div className="input-field">
                    <label className="label">Name</label>
                    <div className="control ">
                      <input
                        name="name"
                        className="checkout-form-input"
                        type="text"
                        placeholder="Student Name"
                        value=""
                      ></input>
                    </div>
                  </div>
                  <div className="input-field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        name="email"
                        className="checkout-form-input"
                        type="email"
                        placeholder="student@codepath.org"
                        value=""
                      ></input>
                    </div>
                  </div>
                  {/* <div className="field">
                    <div className="control">
                      <label className="checkbox">
                        <input name="termsAndConditions" type="checkbox">
                          <span className="label">
                            I agree to the{" "}
                            <a href="#terms-and-conditions">
                              terms and conditions
                            </a>
                          </span>
                        </input>
                      </label>
                    </div>
                  </div> */}
                  <p className="is-danger"></p>
                  <div className="field">
                    <div className="control">
                      <button className="button checkout-button">Checkout</button>
                    </div>
                  </div>
                </div>
                <div className="checkout-success">
                  <h3>
                    Checkout Info{" "}
                    <span className="icon button">
                      <i className="material-icons md-48">fact_check</i>
                    </span>
                  </h3>
                  <div className="content">
                    <p>
                      A confirmation email will be sent to you so that you can
                      confirm this order. Once you have confirmed theorder, it
                      will be delivered to your dorm room.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </section>
  );
}
