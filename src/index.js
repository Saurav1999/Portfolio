import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Theme } from "@liquid-design/liquid-design-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <ToastContainer />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById("root")
);
