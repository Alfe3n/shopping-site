import React, { useState } from "react";
import "./filter.css";

function filter() {
  // const [filters, setFilters] = useState([
  //   {
  //     search: "",
  //     category: "All",
  //     company: "All",
  //   },
  // ]);
  const [category, setCategory] = useState("All");
  // const[company,setCompany]=useState{"All"}
  // const[price,setPrice]=useState{40000}
  // const[freeShipping,setFreeShipping]=useState()

  function changeCategory(newCategory) {
    setCategory(newCategory);
    // console.log(category);
  }
  return (
    <div className="filter-container">
      <form>
        <input type="text" placeholder="Search" className="search"></input>
      </form>
      <div className="category-container">
        <h4>Category</h4>
        <ul>
          <li
            onClick={() => {
              changeCategory("All");
            }}
          >
            All
          </li>
          <li
            onClick={() => {
              changeCategory("Office");
            }}
          >
            Office
          </li>
          <li
            onClick={() => {
              changeCategory("Living Room");
            }}
          >
            Living room
          </li>
          <li>Kitchen</li>
          <li>BedRoom</li>
          <li>Dining</li>
          <li>Kids</li>
        </ul>
      </div>
      <div className="Company-container">
        <h4>Company</h4>
        <p>all</p>
      </div>
      <div className="price-container">
        <p>price</p>
      </div>
      <button className="clear-btn"> Clear filters</button>
    </div>
  );
}

export default filter;
