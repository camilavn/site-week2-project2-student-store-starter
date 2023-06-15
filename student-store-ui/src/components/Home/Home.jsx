import * as React from "react";
import "./Home.css";
import Hero from "./Hero";
import ProductDetail from "./ProductDetail";
import ProductCard from "./ProductCard";
import ProductGrid from "./ProductGrid";
import ProductView from "./ProductView";
import { useState } from "react";

export default function Home({ products }) {
  const [search, setSearch] = useState();
  const [category, setCategory] = useState();

  console.log(products);

  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech",
  ];

  // const filtered = products.filter((product) => {
  //   let productCategory = category.toLowerCase() == "all categories" ? "" : product.category.toLowerCase();
  //   const matchSearches = search.toLowerCase() === "" || product.name.toLowerCase().includes(search.toLowerCase());
  //   const matchCategories = productCategory === "" || product.category?.toLowerCase() === productCategory;
  //   return matchSearches && matchCategories;

  // });

  return (
    <>
      <div className="home">
        <Hero />
        {/* <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} value={search}/> */}
        <ProductGrid products={products} />
        <footer>
          {" "}
          <p> footer </p>{" "}
        </footer>
      </div>
    </>
  );
}
