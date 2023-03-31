import React from "react";
import "./p5.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Address from "../common/address";
import { useStateContext } from "../contexts/ContextProvider";
export function Page5() {
  const { cart, setCart } = useStateContext();
  let shipping = 0;
  return (
    <div>
      <Navbar />
      <Address />
      <div className="cart-contents-container">
        <div>
          <div className="cart-heading">
            <p className="item-heading">Item</p>
            <p className="heading">Price</p>
            <p className="heading">Quantity</p>
            <p className="heading">Subtotal</p>
          </div>
          <hr></hr>
          <div className="cart-contents">
            {cart.map((product) => {
              {
                if (product.shipping === true) shipping = 6;

                return (
                  <div className="cart-items">
                    <div className="item-name-img">
                      <img src={product.image}></img>
                      <div>{product.name}</div>
                    </div>
                    <div className="price-value">
                      <p>{product.price}</p>
                    </div>
                    <div className="count-value">
                      <button>-</button>
                      <h1>{product.count}</h1>
                      <button>+</button>
                    </div>
                    <div className="price-value">
                      <p>{product.price * product.count + shipping}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
