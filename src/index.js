import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
  // ※react-v18以降でreact-beautiful-dndを使用する際はReact.StrictModeをOFFにする
);

reportWebVitals();
