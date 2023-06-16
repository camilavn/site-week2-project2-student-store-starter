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

export default function Home({ products }) {

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


    const matchSearches = (searchTerm == "" || productName.includes(searchTerm));
    const matchCategories = (searchCategory == "all categories" || product.category?.toLowerCase() == searchCategory);
    
    return matchSearches && matchCategories;
  });


  return (
    <>
      <div className="home">   
      <Hero />
      <Logo /> 
        <form className="searchBar">
        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search}/>
        </form>
        <ProductGrid products={products} filtered={filtered}/>
        <div className="About" id="about">
          <h1> About </h1>
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        </div>
      <div className="Footer">
        <footer className="footer">
        {"Contact Area"}
        <p> footer </p>
        </footer>
      </div>
      </div>
    </>
  );
}
