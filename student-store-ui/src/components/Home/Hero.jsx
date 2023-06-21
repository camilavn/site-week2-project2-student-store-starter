import React from "react";
import { Outlet } from "react-router-dom";
import "./Hero.css";

export default function Hero() {
    return (
        <>
        <div className="hero"> 
        <div className="content" id="content">
        <h1> Welcome to Camila's Student Store! </h1>
        </div>
        </div>
        </>
    )
}