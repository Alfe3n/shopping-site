import React from "react";

function newsletter() {
  return (
    <div className="newsletter-container">
      <div>
        <h3>Join our newsletter and get 20% off</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta
          temporibus illo blanditiis velit sequi architecto similique suscipit
        </p>
      </div>
      <div>
        <form className="form-container">
          <input type="email" placeholder="Enter Email"></input>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default newsletter;
