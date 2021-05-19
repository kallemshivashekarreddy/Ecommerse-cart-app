
import React from "react";
import Login from "./Login";
import Home from "./Home";
import Header from "../containers/Header";
import Signup from "./signup";
import ProductListing from "../containers/ProductListing";

import ProductDetails from "../containers/ProductDetails";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        
     
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" component={ProductDetails} />
        <Route>404 Not Found!</Route>
      </Switch>
      </Router>
    </div>
  );
}
