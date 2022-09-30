import "./Login.css";

import React from "react";
import NavBar from "../NavBar/NavBar";

function Loginb() {
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
        <div className="main-box">
        <br/>
        <br/>
        <br/>
        <h1 className="heading text-center mt-2">Login for Buyer</h1>
        <div className="main-login">
          <p className="sign" align="center">
            Log in
          </p>
          <form className="form1">
            <input
              className="un "
              type="text"
              align="center"
              placeholder="Username"
            />
            <input
              className="pass"
              type="password"
              align="center"
              placeholder="Password"
            />
         
              <button className="submit" align="center">
                Sign in
              </button>
          
          </form>
        </div>
      </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    </>
  );
}

export default Loginb;
