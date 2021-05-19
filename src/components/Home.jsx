
import React, { useState ,useEffect} from "react";
import Input from "./input";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
export default function Home() {
  const [renderbool, setBool] = useState(false);
  const [logged,setLogged]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
    const userloggedBool=localStorage.getItem('userlogged');
    if(!userloggedBool){
      setLogged(true);
    }
  },1000)},[logged])

  
  function startEvent() {
    setBool(true);
  }
  return (
    <div className="home">
      <h1>Welcome to the <i> cartGo</i>
      </h1>
      <button class="sign-up" onClick={startEvent}>
        Start
      </button>
      {logged ? <Redirect to="/main" /> : null}

    </div>
  );
}
