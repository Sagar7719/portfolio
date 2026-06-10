import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";

AOS.init({
  duration: 800,
  once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
