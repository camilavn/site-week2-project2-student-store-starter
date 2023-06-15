import* as React from "react"
import {Link} from "react-router-dom"
import Home from "./Home"
import { Outlet } from "react-router-dom"

export default function Logo() {
    return (
        <>
        {/* <Link to="/"> */}
            {/* <Home/> */}
            <div className="logo" id="logo">
            <img src="https://images.template.net/99909/free-acid-smiley-clipart-prr0m.jpg" alt="logo"/>  
            </div> 
        {/* </Link> */}
        </>
    )

}