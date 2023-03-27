import React from "react";
import { useState, useEffect } from "react";
import { data } from "../data";
import "./grid.css";
import "./filter.css";
import { useNavigate } from "react-router-dom";

import "./filtergrid.css";
function filtergrid() {
  const navigate = useNavigate();
  const [Products, setProducts] = useState(data);
  // let filteredProducts=[]

  const [Search, setSearch] = useState("");
  const [Category, setCategory] = useState("all");
  const [Company, setCompany] = useState("all");
  const [Price, setPrice] = useState(99999);
  const [FreeShipping, setFreeShipping] = useState(false);

  function searchFunction(e) {
    const keyword = e.target.value;
    if (keyword !== "") {
      const results = data.filter((product) => {
        return product.name
          .toLocaleLowerCase()
          .startsWith(keyword.toLocaleLowerCase());
      });
      setProducts(results);
    } else {
      setProducts(data);
    }
    setSearch(keyword);
  }
  // function priceFunction(e) {
  //   const price = e.target.value;
  //   const results = data.filter((product) => {
  //     return product.price < price;
  //   });
  //   // setProducts(results);
  //   // filteredProducts=results
  //   setPrice(price);
  // }

  // function categoryFunction(newCategory) {
  //   // if (newCategory !== "all") {
  //   console.log("Data", Products);
  //   let results = Products.filter((product) => {
  //     return product.category === newCategory;
  //   });
  //   setProducts(results);

  //   console.log("inside if", results);
  //   // }
  //   // setProducts(results);
  //   setCategory(newCategory);

  //   console.log("changed");
  // }

  // function companyFunction(e) {
  //   const company = e.target.value;
  //   console.log(company);
  //   const results = data.filter((product) => {
  //     product.company === company;
  //   });
  //   setProducts(results);
  //   setCompany(company);
  // }
  function applyFilters() {
    console.log("COmapny:", Company, "Price :", Price, "Category :", Category);
    console.log(data);
    console.log(Company);
    const results = data.filter((product) => {
      console.log(product.company, "jhdsaj", Company);
      return (
        product.company === Company &&
        product.category === Category &&
        product.price < Price
      );
    });
    console.log(results);
    setProducts(results);
  }

  function changeShipping() {
    setFreeShipping(true);
  }
  function resetFilter() {
    setCategory("all");
  }
  return (
    <div className="filtergrid-container">
      <div className="filter-container">
        <form>
          <input
            type="text"
            placeholder="Search"
            className="search"
            value={Search}
            onChange={searchFunction}
          ></input>
          {console.log(Search)}
          <div className="category-container">
            <h4>Category</h4>
            <div className="category-button-container">
              <button
                onClick={() => {
                  e.preventDefault();

                  setCategory("All");
                }}
              >
                All
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  setCategory("office");
                }}
              >
                Office
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setCategory("Living room");
                }}
              >
                Living room
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  setCategory("kitchen");
                }}
              >
                Kitchen
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  setCategory("bedroom");
                }}
              >
                Bedroom
              </button>
              <button>Dining</button>
              <button>Kids</button>
            </div>
          </div>
          <div className="Company-container">
            <label htmlFor="company">Company</label>
            <select
              id="company"
              onChange={(e) => setCompany(e.target.value)}
              value={Company}
            >
              <option value="all">All</option>
              <option value="marcos">marcos</option>
              <option value="ikea">ikea</option>
              <option value="liddy">liddy</option>
            </select>
          </div>
          <div className="price-container">
            <label htmlFor="Price"></label>
            <input
              type="range"
              min="0"
              max="99999"
              id="price"
              name="price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="shipping" onClick={changeShipping}>
              Free Shipping
            </label>
            <input
              type="checkbox"
              id="shipping"
              name="shipping"
              value="free shipping"
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              applyFilters();
            }}
          >
            Apply filters
          </button>
          <button className="clear-btn" onClick={resetFilter}>
            Clear filters
          </button>
        </form>
      </div>
      {/* GRID */}
      {console.log("render")}
      <div className="grid-container">
        {Products.map((product) => {
          {
            return (
              <div className="product" key={product.id}>
                <div className="img-container">
                  <img
                    src={product.image}
                    onClick={() => navigate(`./individual/${product.id}`)}
                  />
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
          }
        })}
      </div>
    </div>
  );
}

export default filtergrid;
