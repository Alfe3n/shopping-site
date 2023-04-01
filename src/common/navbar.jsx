import React from "react";
import "./navbar.css";
import logo from "../assets/logo.svg";
import cart from "../assets/shopping-cart.svg";
import login from "../assets/log-in.svg";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="container">
      <div className="nav-container">
        <a href="/">
          <img className="nav-left" src={logo}></img>
        </a>
        <div className="nav-center">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/checkout">Checkout</a>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="cart">
            <a href="/cart">
              <span> Cart</span>
            </a>
            <a href="/cart">
              <img src={cart}></img>
            </a>
          </div>
          <div className="login">
            <span>Login</span>
            <img src={login}></img>
          </div>
        </div>

        {/* footer */}
      </div>
    </div>
  );
}

export default navbar;
