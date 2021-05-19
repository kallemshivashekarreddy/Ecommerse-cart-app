
import React, { useState,useEffect } from "react";
import Input from "./input";
import Login from "./Login";
import Main from "./main";
// import '../styles.css';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: ""
  });

  const [logged,setLogged]=useState(false);
  useEffect(()=>{
    setTimeout(()=>{
    const userloggedBool=localStorage.getItem('userlogged');
    if(userloggedBool){
      setLogged(true);
    }
  },1000)},[logged])
  function handleData(useval) {
    const d = useval.type;
    const v = useval.inputValue;

    setUser({ ...user, [d]: v });
    console.log(user);
  }
  function handleSignup() {
  
    axios({
      method: "post",
      url: "http://localhost/php/right-kart/server/signup.php",
      data: user
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err, "error at server");
      });
      localStorage.setItem('userlogged',true);
      setLogged(true);

  }
  return (
    <Router>
    {logged ? <Redirect to="/main" /> : null}
      <div className="App">
     
        <h1 className="reg-h1">Registration</h1>
        <Input title="FirstName" handleData={handleData} />
        <Input title="LastName" handleData={handleData} />
        <Input title="Email" handleData={handleData} />
        <Input title="Password" handleData={handleData} />
        <Input title="ConfirmPassword" handleData={handleData} />
        <button type="submit" className="sign-up" onClick={handleSignup}>
          Sign-up
        </button>
        <div className="reg-log">
          <h4 className="reg-h4">Already have an account?</h4>
          <Link to="/login">
            <h4 onClick={()=>{
              setTimeout(()=>{
                window.location.reload();
              },0)}}>Login  </h4>
          </Link>
        </div>
      </div>
    </Router>
  );
}
