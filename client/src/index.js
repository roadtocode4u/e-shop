// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import "./index.css";

ReactDOM.render(
    <BrowserRouter> 
    <App />
    </BrowserRouter>,
    document.getElementById("root")
    );

