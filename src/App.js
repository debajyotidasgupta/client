import "./App.css";

import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Solution from "./components/Solution";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "solution" && <Solution />}
      {page === "pricing" && <Pricing />}
      {page === "faq" && <Faq />}
      <Footer />
    </div>
  );
}

export default App;
