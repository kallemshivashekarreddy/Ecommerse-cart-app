import React, { useState ,useEffect} from "react";
import Input from "./input";
// import '../main.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
export default function Navbar() {
return(
    <nav className="navBar">
    <ul>
    <li>Home</li>
    <li>Category</li>
    <li>About</li>
    <li>Profile</li>
    </ul>
    </nav>
)
}