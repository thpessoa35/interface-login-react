import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from "../pages//Login/index";
import Register from "../pages/Register/index";
import RouterProtected from '..//routes/ProtectedRoutes'
import Home from "..//pages/Home/index";

function Routers() {
  
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/home" element={<RouterProtected>
          <Home/>
        </RouterProtected>}/>
      </Routes>
    </Router>
  );
}

export default Routers;
