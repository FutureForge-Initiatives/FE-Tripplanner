import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="wrap-sidebar">
      <div className="sidebar-logo">Trip Planner Admin</div>
      <div className="wrap-sidebar-nav">
        <ul className="side-nav">
          <li className="sidebar-item">
            <Link to="/Agen&Admin/Dashboard">Dashboard</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Agen&Admin/Agen">Agen</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Agen&Admin/Pengguna">Pengguna</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Agen&Admin/Destinasi">Destinasi</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Agen&Admin/Akomodasi">Akomodasi</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/Agen&Admin/Paket">Paket</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
