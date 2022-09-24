import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Createpost from "./pages/Createpost";

function App() {
  return (
    <div>
      {" "}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<Createpost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
