import * as React from "react";
import "./Home.css";
import Hero from "./Hero";
import ProductDetail from "./ProductDetail";
import ProductCard from "./ProductCard";
import ProductGrid from "./ProductGrid";
import ProductView from "./ProductView";
import Logo from "./Logo";
import { useState } from "react";

export default function Home({ products }) {
  const [search, setSearch] = useState();
  const [category, setCategory] = useState();

  // console.log(products);

  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech",
  ];

  const filtered = products?.filter((product) => {
    let productCategory = category?.toLowerCase() == "all categories" ? "" : product.category?.toLowerCase();
    const matchSearches = search?.toLowerCase() === "" || product.name?.toLowerCase().includes(search?.toLowerCase());
    const matchCategories = productCategory === "" || product.category?.toLowerCase() === productCategory;
    return matchSearches && matchCategories;

  });

  // function search(e) {
  //   // setSearch(e.target.value);
  //   e.preventDefault();
  // }

  return (
    <>
      <div className="home">
        <Hero />
        <Logo />
        <form>
        <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search}/>
        </form>
        <ProductGrid products={products} />
        <div className="About" id="about">
          <h1> About </h1>
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
        </div>
          <div className="Footer">
          <footer class="footer">
          {"Contact Area"}
          <p> footer </p>
          </footer>
          </div>
      </div>
    </>
  );
}
