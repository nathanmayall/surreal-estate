import React from "react";
import ReactDOM from "react-dom";

import axios from "axios";

import "./index.css";
import App from "./components/App";

axios.defaults.baseURL = "http://localhost:3000/api/v1/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
