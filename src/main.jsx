import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./style/index.scss";

WebFont.load({
  google: {
    families: ["Roboto:400,500,700,900"],
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
