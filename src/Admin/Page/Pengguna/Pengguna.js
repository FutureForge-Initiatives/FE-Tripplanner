import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Topbar from "../../Component/Topbar/Topbar";
import "./Pengguna.css"; // Pastikan file CSS ini ada untuk styling

function Pengguna() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className="Pengguna-wrap">
        <div className="container-pengguna">
          <Link to="/tambah-pengguna">
            <button className="button-tambah-pengguna">Tambah Pengguna</button>
          </Link>
          <div className="table-pengguna-content">
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
              <tbody>{/* Tampilkan data pengguna di sini */}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pengguna;
