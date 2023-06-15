import* as React from "react"
import {Link} from "react-router-dom"
import Home from "./Home"
import { Outlet } from "react-router-dom"

export default function Logo() {
    return (
        <>
            <div className="logo" id="logo">
            <Link to="/"> 
            <img src="https://images.template.net/99909/free-acid-smiley-clipart-prr0m.jpg" alt="logo"/> 
            </Link>   
            </div> 
        </>
    )

}