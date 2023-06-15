import * as React from "react"
import "./Navbar.css"
import { Outlet, Link } from "react-router-dom"
import Logo from "../../components/Home/Logo"

export default function Navbar() {
  return (
    <>
    <nav className="navbar"></nav>
    <Outlet />
    </>
  )
}
