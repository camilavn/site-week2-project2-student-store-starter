import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"

import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"



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
      {/* <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>}/> 
        <Route path="" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>  */}
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          <Home products={products}/>
        </main>
        {/* </Routes>
      </BrowserRouter> */}
    </div>
  )
}
