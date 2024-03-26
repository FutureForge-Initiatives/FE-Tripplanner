import "./App.css"
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Dashboard from "./Admin/Component/Home/Dashboard";
import Agen from "./Admin/Page/Agen/Agen";
import Pengguna from "./Admin/Page/Pengguna/Pengguna";
import Destinasi from "./Admin/Page/Destination/Destinasi";
import Akomodasi from "./Admin/Page/Akomodasi/Akomodasi";
import Paket from "./Admin/Page/Paket/Paket";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Agen&Admin/Dashboard" element={<Dashboard />}/>
        <Route path="/Agen&Admin/Agen" element={<Agen />}/>
        <Route path="/Agen&Admin/Pengguna" element={<Pengguna />}/>
        <Route path="/Agen&Admin/Destinasi" element={<Destinasi/>}/>
        <Route path="/Agen&Admin/Akomodasi" element={<Akomodasi/>}/>
        <Route path="/Agen&Admin/Paket" element={<Paket/>}/>
      </Routes>
    </Router>
  )
}


export default App
