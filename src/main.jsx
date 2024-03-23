import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/index.scss";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Roboto:400,500,700,900"],
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
