import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Solution from "./components/Solution";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/solution" element={<Solution />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
