import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home/home";
import Signup from "./Auth/signup";
import Login from "./Auth/login";

import Adminhome from "./Admin/AdminDashboard";
import Customerhome from"./Client/CustomerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/login" element={<Login />} />
         
         <Route path="/admin-home" element={<Adminhome />} />

         <Route path="/customer-home" element={<Customerhome />}/>
         
      </Routes>
    </Router>
  );
}

export default App;
