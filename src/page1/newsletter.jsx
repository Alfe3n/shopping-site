import React from "react";

function newsletter() {
  return (
    <div className="news">
      <h4>Join our newsletter and get 20% off</h4>

      <div className="newsletter-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam soluta
          temporibus illo blanditiis velit sequi architecto similique suscipit
        </p>

        <div>
          <form className="form-container">
            <input type="email" placeholder="Enter Email"></input>
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default newsletter;
