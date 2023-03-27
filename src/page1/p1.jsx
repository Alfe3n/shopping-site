import React from "react";
import "./p1.css";
import Navbar from "../common/navbar";
import Content from "./content";
import Newsletter from "./newsletter";
import Footer from "../common/footer";
export function Page1() {
  return (
    <div className="page1-container">
      <Navbar />
      <Content />
      <Newsletter />
      <Footer />
    </div>
  );
}
