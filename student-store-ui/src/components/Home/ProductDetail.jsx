import * as React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function ProductDetail() {
  const params = useParams();
  
  const backendURL = `http://localhost:3001/products/${params.id}`;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(backendURL).then((response) => {
      console.log(response);
      setProduct(response.data);
    });
  }, []);


  return (
    <>
      <Link to={"/"} key={product.id}>
        <div className="product-detail">
          <img src={product.image} alt={product.name}></img>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </Link>
    </>
  );
}
