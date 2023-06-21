import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Logo from "../Home/Logo"
import Hero from "../Home/Hero"
import ProductDetail from "../Home/ProductDetail"




export default function App() {

  const [products, setProducts] = useState();
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:3001/`).then((response) => {
          setProducts(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])


  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar/>}> 
          <Route path="" element={<Home products={products} shoppingList={shoppingList} setShoppingList={setShoppingList}/>}/>
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
