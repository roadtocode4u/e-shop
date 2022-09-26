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

import "./index.css";

ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addproduct" element={<AddProduct />} />

    </Routes>
    </BrowserRouter>,
    document.getElementById("root")
);


