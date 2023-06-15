import* as React from "react"
import {Link} from "react-router-dom"
import Home from "./Home"
import { Outlet } from "react-router-dom"
import { useParams } from "react-router-dom"
import ProductCard from "./ProductCard"

export default function ProductDetail(product) {

    return (
        <>
        <div className="product-detail">
            <img src={product.image} alt={product.name}></img>
              <p>{product.name}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
        </>
    )

}