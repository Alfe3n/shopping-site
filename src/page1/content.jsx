import React from "react";
import pic1 from "../assets/pic1.jpeg";
function content() {
  return (
    <>
      <div className="contents-container">
        <div className="first">
          <div className="left-container">
            <h1>Design Your Comfort Zone</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <a href="/products">
              <button>SHOP NOW</button>
            </a>
          </div>
          <div className="right-container">
            <img src={pic1}></img>
          </div>
        </div>

        <div className="third">
          <div className="third-1">
            <h2>Custom Furniture Build Only for You</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              dolorum debitis consectetur reprehenderit non aliquam voluptates
              dolore aut vero consequuntur.
            </p>
          </div>
          <div className="third-2">
            <div className="box">
              <h4>Mission</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
            <div className="box">
              <h4>Vision</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
            <div className="box">
              <h4>History</h4>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
                velit autem unde numquam nisi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default content;
