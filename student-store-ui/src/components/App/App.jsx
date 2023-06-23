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

  const initialCheckoutForm = {
    email: '',
    name: ''
  };

  const [products, setProducts] = useState();
  const [shoppingList, setShoppingList] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState(initialCheckoutForm);


  useEffect(() => {
      axios.get(`http://localhost:3001/`).then((response) => {
          setProducts(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const handleOnCheckoutFormChange = (e) => {
    const { name, value } = e.target;
    setCheckoutForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleOnSubmitCheckoutForm = () => {
    fetch("/api/submit-order", {
      method: "POST",
      body: JSON.stringify(checkoutForm),
    })
      .then((response) => response.json())
      .then((data) => {
        //update the state or perform any other actions here
      })
      .catch((error) => {
        // Handle the error
        console.error("Error submitting the order:", error);
      });
  };


  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Navbar/>}> 
          <Route path="" element={<Home products={products} shoppingList={shoppingList} setShoppingList={setShoppingList} 
          checkoutForm={checkoutForm} setCheckoutForm={setCheckoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>}/>
          <Route path="products/:id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
