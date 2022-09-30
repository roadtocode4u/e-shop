import * as React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import AddProduct from "./components/AddProduct/AddProduct";
// import Logins from "./components/Login/Logins";
import Signup from "./components/Signup/Signupb";


function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/addproduct" element={<AddProduct />} />
        {/* <Route path="/logins" element={<Logins />} /> */}
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </>
  );
}

export default App;
