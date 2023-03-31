import React, { useEffect } from "react";
import "./p4.css";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Address from "../common/address";
import { data } from "../data";
// import Cartcontents from "../page5/cartcontents";
import { useStateContext } from "../contexts/ContextProvider";
export function Page4() {
  let { id } = useParams();

  const { cart, setCart } = useStateContext();

  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [count, setCount] = useState(1);
  function incrementCount() {
    if (count != 10) setCount(count + 1);
  }
  function decrementCount() {
    if (count != 1) setCount(count - 1);
  }

  useEffect(() => {
    const result = data.filter((product) => {
      return product.id === id;
    });

    setItem(result[0]);
  }, []);

  function addToCart() {
    item.count = count;
    const newCart = [...cart, item];
    setCart(newCart);
    navigate("/cart");
  }
  return (
    <div>
      <Navbar />
      <Address address="" />
      <Link to="/products">
        <button className="backTo">BACK TO PRODUCTS</button>
      </Link>
      <div className="p4-container">
        <div className="p4-left-container">
          <img src={item.image}></img>
        </div>
        <div className="p4-right-container">
          <h1 className="item-name">{item.name}</h1>
          <p className="price">${item.price}</p>
          <p className="desc">{item.description}</p>
          <div className="item-info-container">
            <div className="item-info">
              <p>Available:</p>
              <p>In Stock</p>
            </div>
            <div className="item-info">
              <p>SKU:</p>

              <p>${item.id}</p>
            </div>
            <div className="item-info">
              <p>Brand:</p>
              <p>${item.company}</p>
            </div>
          </div>
          <hr className="line-break"></hr>
          <div className="count-button">
            <button onClick={decrementCount}>-</button>
            <h1>{count}</h1>
            <button onClick={incrementCount}>+</button>
          </div>
          <button className="addToCart" onClick={addToCart}>
            ADD TO CART
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
