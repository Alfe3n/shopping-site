import React, { useState } from "react";
import { data } from "../data";
import "./grid.css";
function grid(props) {
  return (
    <div className="grid-container">
      {data.map((product) => {
        return (
          <div className="product">
            <div className="img-container">
              <img src={product.image}></img>
            </div>
            <div className="details-container">
              <div className="name">
                <p>{product.name}</p>
              </div>
              <div className="price">
                <p>${product.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default grid;
