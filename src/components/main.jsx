import React, { useState ,useEffect} from "react";
import Input from "./input";
import Navbar from './NavBar';
import '../styles.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
export default function Main() {
   
return (
    <div>
    <Navbar />
        <h1>Home</h1>
    </div>
)
    
}