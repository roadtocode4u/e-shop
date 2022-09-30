// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import * as React from "react";
import * as ReactDOM from "react-dom";

// import router
import {BrowserRouter, Routes, Route} from "react-router-dom";


import "./index.css";
import App from "./App";
import AddProduct from "./components/AddProduct/AddProduct";
import Logins from "./components/Login/Logins";
import Loginb from "./components/Login/Loginb";
import Signups from "./components/Signup/Signups";
import Signupb from "./components/Signup/Signupb";

ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/logins" element={<Logins />} />
        <Route path="/loginb" element={<Loginb />} />
        <Route path="/signupb" element={<Signupb />} />
        <Route path="/signups" element={<Signups />} />

    </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);


