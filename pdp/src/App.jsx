import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "container/Header";
import Footer from "container/Footer";

import "./index.scss";
import ProductDescriptionPage from "./components/ProductDescriptionPage";

const App = () => (
  <Router>
  <div className="text-3xl">
    <Header/>
      <Routes>
        <Route path="/product/:id" element={<ProductDescriptionPage/>}/>
      </Routes>
    <Footer/>
  </div>
  </Router>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)