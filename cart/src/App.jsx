import React from "react";
import ReactDOM from "react-dom/client";
import Header from "container/Header";
import Footer from "container/Footer";
import Cart from "./components/Cart";

import "./index.scss";

const App = () => (
  <div className="text-3xl">
    <Header/>
    <Footer/>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)