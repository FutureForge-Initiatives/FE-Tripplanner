import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ".//paket.css"

function PaketWisata() {
    const [paketWisata, setPaketWisata] = useState([
        { gambar: "link_gambar_1.jpg", hotel: "Hotel A", destinasi: "Pulau Bali", transportasi: "Pesawat", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel B", destinasi: "Gunung Bromo", transportasi: "Kereta Api", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel C", destinasi: "Danau Toba", transportasi: "Bus", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel D", destinasi: "Pulau Lombok", transportasi: "Kapal Laut", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel E", destinasi: "Taman Nasional Komodo", transportasi: "Pesawat", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel F", destinasi: "Pulau Raja Ampat", transportasi: "Pesawat", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel G", destinasi: "Gunung Rinjani", transportasi: "Kereta Api", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel H", destinasi: "Pantai Kuta", transportasi: "Bus", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel I", destinasi: "Pulau Derawan", transportasi: "Pesawat", harga: "Rp." },
        { gambar: "link_gambar_1.jpg", hotel: "Hotel J", destinasi: "Pulau Bunaken", transportasi: "Kapal Laut", harga: "Rp." }
    ]);

    return (
        <div>
            <Navbar />
            <div id="paket-wisata">
                {paketWisata.map((paket, index) => (
                    <div className="paket" key={index}>
                    <div className="gambar-container">
                        <img className="gambar" src={paket.gambar} alt={"Gambar Paket Wisata " + (index + 1)} />
                    </div>
                    <div className="info">
                        <div><strong></strong> {paket.hotel}</div>
                        <div><strong></strong> {paket.destinasi}</div>
                        <div><strong></strong> {paket.transportasi}</div>
                        <div><strong></strong> {paket.harga}</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default PaketWisata;