import React from "react";
import Homepage from "./components/Homepage";
import Register from "./components/Register";
import Login from './components/Login';
import Search from "./components/Search";
import Region from "./components/Region";
import About from "./components/About";
import Services from "./components/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const styles = {
    background:
      "linear-gradient(242.65deg, #73EED0 20.96%, rgba(121, 83, 210, 0.758451) 62.87%)",
  };
  return (
    <div className="App" style={styles}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/region/:id" element={<Region />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/search" element={<Search />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/region/:id" element={<Region />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
