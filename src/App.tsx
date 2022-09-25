import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Createpost from "./pages/Createpost";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {" "}
      <BrowserRouter>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/createpost" element={<Createpost />} />
            </Routes>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
