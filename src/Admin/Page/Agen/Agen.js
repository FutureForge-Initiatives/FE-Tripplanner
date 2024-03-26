import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Topbar from "../../Component/Topbar/Topbar";
import "./Agen.css";

function Agen() {
  return (
    <div>
    <Sidebar />
      <Topbar />
    <div className="Agen-wrap">
      
      <div className="container-agen">
        <Link to="/tambah-agen">
          <button className="button-tambah-agen">Tambah Agen</button>
        </Link>
        <div className="table-agen-content">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{/* Tampilkan data agen di sini */}</tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Agen;
