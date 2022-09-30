import React from "react";
import "./Signup.css"; 
import NavBar from "../NavBar/NavBar";

function Signupb() {
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
        <br />
        <br />
        <br />
        <br />
        <h1 className="heading text-center">Register for Seller</h1>
        <div className="main-login">
            <p className="sign" align="center">Sign Up</p>
            <form className="form1">
                <input className="un " type="text" align="center" placeholder="Username"/>
                <input className="un " type="text" align="center" placeholder="Email"/>
                <input className="pass" type="password" align="center" placeholder="Password"/>
                <input className="pass" type="password" align="center" placeholder="Confirm Password"/>

                <button className="submit" align="center">Sign up</button>
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

export default Signupb;
