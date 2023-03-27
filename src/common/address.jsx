import React from "react";
import "./address.css";
function address(props) {
  return (
    <div className="address-container">
      <h3>
        <a href="\">Home</a> <span className="slash">/</span>
        {props.address}
      </h3>
    </div>
  );
}

export default address;
