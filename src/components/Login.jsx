
import React, { useState } from "react";
import Input from "./input";
import Signup from "./signup";
import App from "./App";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Login() {
  const [user, setUser] = useState({
    Email: "",
    Password: ""
  });

  
  function handleData(useval) {
    const d = useval.type;
    const v = useval.inputValue;

    setUser({ ...user, [d]: v });
    console.log(user);
  }
  return (
    <Router>
    
      <div>
        <h1>Login</h1>
        <Input title="Email" handleData={handleData} />
        <Input title="Password" handleData={handleData} />

        <button type="submit" className="sign-up">Sign-In</button>
        <div className="reg-log">
          <h4 className="reg-h4">Do you have an account?</h4>
          <Link to="/signup">
            <h4 onClick={()=>{
              setTimeout(()=>{
                window.location.reload();
              },0);
              
            }}>Signup</h4>
          </Link>
        </div>
      </div>
    </Router>
  );
}
