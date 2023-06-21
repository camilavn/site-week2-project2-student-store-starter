import * as React from "react"
import "./Navbar.css"
import { Outlet, Link } from "react-router-dom"
import Logo from "../../components/Home/Logo"

export default function Navbar() {
  return (
    <>
    <nav className="navbar" id="navbar">
      <div className="homeTab" id="homeTab">
      <a href="/"> Home </a>
      </div>
      <div className="aboutTab" id="aboutTab">
      <a href="#about"> About </a>
      </div>
      <div className="footerTab" id="footerTab">
      <a href="#footer"> Footer </a>
      </div>
    </nav>
    <Outlet />
    </>
  )
}
