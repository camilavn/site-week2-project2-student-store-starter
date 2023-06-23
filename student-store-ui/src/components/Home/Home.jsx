import * as React from "react";
import "./Home.css";
import Hero from "./Hero";
import ProductDetail from "./ProductDetail";
import ProductCard from "./ProductCard";
import ProductGrid from "./ProductGrid";
import ProductView from "./ProductView";
import Logo from "./Logo";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

export default function Home({ shoppingList, setShoppingList, products, checkoutForm, setCheckoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");

  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech",
  ];

  const filtered = products?.filter((product) => {
    const searchTerm = search?.toLowerCase();
    const searchCategory = category?.toLowerCase();

    let productName = product.name?.toLowerCase();

    const matchSearches = searchTerm == "" || productName.includes(searchTerm);
    const matchCategories =
      searchCategory == "all categories" ||
      product.category?.toLowerCase() == searchCategory;

    return matchSearches && matchCategories;
  });

  return (
    <>
    <div className="sideBar">
      <Sidebar shoppingList={shoppingList} checkoutForm={checkoutForm} setCheckoutForm={setCheckoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
    </div>
      <div className="home">
        <Hero />
        <Logo />
        <form className="searchBar">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <div className="CategoriesBar">
        {categories.map((category, index) => ( 
         <button key={index} onClick={() => setCategory(category)}> {category} </button>))}
        </div>
        <ProductGrid products={products} filtered={filtered} shoppingList={shoppingList} setShoppingList={setShoppingList}/>
        <div className="BottomArea">
          <div className="About" id="about">
            <h1> About </h1>
            <p>
              The codepath student store offers great products at great prices
              from a great team and for a great cause.
            </p>
          </div>
          <div className="Footer" id="footer">
            <footer>
            <h1> Footer </h1>
            <p> We've searched far and wide for items that perk the interests of even the most eccentric students
            and decided to offer them all here in one place. </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
