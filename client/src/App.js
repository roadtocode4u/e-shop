import * as React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";

import { Routes, Route, Link } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";


function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/addproduct" element={<AddProduct />} /> */}
      </Routes>

    </>
  );
}

export default App;
