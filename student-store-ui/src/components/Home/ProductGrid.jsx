import* as React from "react"
import {Link} from "react-router-dom"
import Home from "./Home"
import { Outlet } from "react-router-dom"
import ProductCard from "./ProductCard"

export default function ProductGrid({shoppingList, setShoppingList, products, filtered}) {

    return (
        <>
        <div className="product-grid" style={{
            width: '100%',
            minHeight: '20vh',
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '5px',
        }}>
            {filtered?.map((product) => {
             return < ProductCard key={product.id} product={product} shoppingList={shoppingList} setShoppingList={setShoppingList} />})}
        </div>
        </>
    )

}

