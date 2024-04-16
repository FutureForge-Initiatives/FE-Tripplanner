import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Topbar from "../../Component/Topbar/Topbar";
import "./Akomodasi.css";

function Akomodasi() {
  return (
    <div>
      <Sidebar />
      <Topbar />
      <div className="Akomodasi-wrap">
        <div className="container-akomodasi">
          <Link to="/tambah-akomodasi">
            <button className="button-tambah-akomodasi">Tambah Paket</button>
          </Link>
          <div className="table-akomodasi-content">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Hotel</th>
                  <th>Transportasi</th>
                  <th>Makanan</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Tampilkan data akomodasi di sini */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Akomodasi;
