import React from "react";
import Story from "./story";
import Address from "../common/address";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import "./p2.css";

export function Page2() {
  return (
    <div>
      <Navbar />
      <Address address={"About"} />
      <Story />
      <Footer />
    </div>
  );
}
