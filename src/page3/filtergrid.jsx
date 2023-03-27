import React from "react";
import { useState, useEffect } from "react";
import { data } from "../data";
import "./grid.css";
import "./filter.css";
import { useNavigate, Link, Outlet } from "react-router-dom";

import "./filtergrid.css";
function filtergrid() {
  const [Products, setProducts] = useState(data);
  const [Search, setSearch] = useState("");
  const [Category, setCategory] = useState("all");
  const [Company, setCompany] = useState("all");
  const [Price, setPrice] = useState(99999);
  const [FreeShipping, setFreeShipping] = useState(true);
  let count = 0;
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
  function priceFunction(e) {
    const price = e.target.value;
    const results = data.filter((product) => {
      return product.price < price;
    });
    setProducts(results);
    setPrice(price);
  }

  function changeCategory(newCategory) {
    if (newCategory !== "all") {
      let result = data.filter((product) => {
        return product.category == newCategory;
      });
      setProducts(result);
    } else setProducts(data);
    setCategory(newCategory);
  }

  function companyFunction(e) {
    const company = e.target.value;
    if (company !== "all") {
      const results = data.filter((product) => {
        return product.company === company;
      });
      setProducts(results);
    } else setProducts(data);

    setCompany(company);
  }

  function changeShipping() {
    // alert("inside");
    setFreeShipping(!FreeShipping);
    console.log(FreeShipping);
    if (FreeShipping === true) {
      const results = data.filter((product) => {
        return product.shipping === true;
      });
      setProducts(results);
    } else setProducts(data);
  }
  function resetFilter() {
    setCategory("all");
    setPrice(99999);
    setCompany("all");
    setFreeShipping(true);
  }
  return (
    <div className="filtergrid-container">
      <div className="filter-container">
        <form>
          <div className="top-line-container">
            <input
              type="text"
              placeholder="Search"
              className="search"
              value={Search}
              onChange={searchFunction}
            ></input>
            <p className="products-number">{Products.length} Products Found </p>
          </div>

          {console.log(Search)}
          <div className="category-container">
            <h4>Category</h4>
            <ul>
              <li
                onClick={() => {
                  changeCategory("all");
                }}
                className="all"
              >
                All
              </li>
              <li
                onClick={() => {
                  changeCategory("office");
                }}
                className="office"
              >
                Office
              </li>
              <li
                onClick={() => {
                  changeCategory("living room");
                }}
                className="living room"
              >
                Living room
              </li>
              <li
                onClick={() => {
                  changeCategory("kitchen");
                }}
                className="kitchen"
              >
                Kitchen
              </li>
              <li
                onClick={() => {
                  changeCategory("bedroom");
                }}
                className="bedroom"
              >
                BedRoom
              </li>
              <li
                onClick={() => {
                  changeCategory("dining");
                }}
                className="dining"
              >
                Dining
              </li>
              <li
                onClick={() => {
                  changeCategory("kids");
                }}
                className="kids"
              >
                Kids
              </li>
            </ul>
          </div>
          <div className="Company-container">
            <label htmlFor="company">
              <h4>Company</h4>
            </label>
            <select
              className="company"
              onChange={companyFunction}
              value={Company}
            >
              <option value="all">All</option>
              <option value="marcos">marcos</option>
              <option value="ikea">ikea</option>
              <option value="liddy">liddy</option>
            </select>
          </div>
          <div className="price-container">
            <h4>Price</h4>
            <label htmlFor="Price">${Price}</label>
            <input
              type="range"
              min="0"
              max="99999"
              id="price"
              name="price"
              value={Price}
              onChange={priceFunction}
            ></input>
          </div>
          <div className="shipping-container">
            <label htmlFor="shipping" onClick={changeShipping}>
              Free Shipping
            </label>
            <input
              type="checkbox"
              id="shipping"
              name="shipping"
              onClick={changeShipping}
              // value={FreeShipping}
            />
          </div>
          <button className="clear-btn" onClick={resetFilter}>
            Clear filters
          </button>
        </form>
      </div>
      {/* GRID */}

      <div className="grid-container">
        {Products.map((product) => {
          {
            let ink = `/products/individual/${product.id}`;
            return (
              <div className="product" key={product.id}>
                <div className="img-container">
                  <Link to={ink}>
                    <img src={product.image} />
                  </Link>
                  <Outlet />
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
