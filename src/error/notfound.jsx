import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import "./notfound.css";
export function Notfound() {
  return (
    <>
      <Navbar />
      <div className="notfound-container">
        <h1>Page Not found !!</h1>
      </div>
      <Footer />
    </>
  );
}
