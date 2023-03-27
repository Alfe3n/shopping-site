import React from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import Address from "../common/address";
// import Grid from "./grid";
import Filtergrid from "./filtergrid";
import "./p3.css";
export function Page3() {
  return (
    <div>
      <Navbar />
      <Address address={"Products"} />
      {/* <Grid /> */}
      <Filtergrid />
      <Footer />
    </div>
  );
}
