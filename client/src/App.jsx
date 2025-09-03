import React, { useEffect } from "react";
// import Login from "./pages/login";
import axios from "axios";
import { useState } from "react";
import {Routes , Route} from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home"


const App = () => {
  
return (
  <div className="bg-gray-950 "> 

    <main className="main-content">
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>


    </div>
  )
};

export default App;
 