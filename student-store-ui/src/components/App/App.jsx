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

  const backendURL = "https://codepath-store-api.herokuapp.com/store"
  const [products, setProducts] = useState();

  useEffect(() => {
      axios.get(backendURL).then((response) => {
          setProducts(response.data.products)
      })
  }, [])


  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar/>}> 
          <Route path="" element={<Home products={products}/>}/>
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
