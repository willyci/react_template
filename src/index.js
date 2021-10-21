import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// link css files
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./css/CHBCore-2.0.0.css";
import "./css/custom.css";

import App from "./app";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
