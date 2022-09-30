import React from "react";
import "./AddProduct.css";
// import { useState } from "react";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function AddProduct()


{
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [company, setCompany] = React.useState("");

  const addProduct = async () => {
    console.log(name, price, category, company);
    // const userId= JSON.parse(localStorage.getItem("user"))._id;
    const userId = "5f9b9b9b9b9b9b9b9b9b9b9b";

    let result = await fetch("http://localhost:5000/add-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },

      body: JSON.stringify({
        name,
        price,
        category,
        company,
        userId,
      }),
    });
    console.log(result);
    alert("Product has been added");
  };


return (
  <>
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <NavBar />
        <div className="addProd">
          <br />
          <br />
          <br />
          <br />
          <br />

          <h2 className="text-center text-light">Add Product</h2>

          {/* // name, price, category, description, image, quantity, userID, Company */}

          <input
            type="text"
            placeholder="Enter Product Name"
            className="inputBox"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Product Price"
            className="inputBox"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Product Category"
            className="inputBox"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Product Company"
            className="inputBox"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />

          <div className="text-center">
            <button
              type="button"
              className="btn btn-success"
              onClick={addProduct}
            >
              Add Product
            </button>
          </div>
        </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <Footer />
  </>
  
);
}

export default AddProduct;
