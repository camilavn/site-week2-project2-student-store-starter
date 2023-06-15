import* as React from "react"
import {Link} from "react-router-dom"
import Home from "./Home"
import { Outlet } from "react-router-dom"
import ProductDetail from "./ProductDetail"

export default function ProductCard({ product }) {
    
    return (
        <>
        <div className="product-card">
        <img src={product.image} alt={product.name}></img>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>

        
        </>
    )

}