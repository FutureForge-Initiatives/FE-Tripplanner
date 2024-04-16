import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import BG from "../../Assets/bg.png";
import "./Home.css";
import { MdSwapHorizontalCircle } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import Footer from "../Footer/Footer";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [showFriendForm, setShowFriendForm] = useState(false); // New state for showing friend form

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const handleSwap = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  // New function to toggle showing friend form
  const showFriendFormHandler = () => {
    setShowFriendForm(!showFriendForm);
  };

  return (
    <div className="body">
      <Navbar />
      <div className="background" style={{ backgroundImage: `url(${BG})` }}>
        <div className="judul-konten">
          <h1>
            Rencanakan Perjalanan <br></br> anda dan dapatkan harga termurah
          </h1>
          <p>Temukan pengalaman perjalanan yang tak terlupakan.</p>
        </div>
        <div className="button">
          <div className="content">
            <button onClick={openPopup}>Create Your Trip Plan</button>
          </div>
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup" ref={popupRef}>
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            {/* Isi popup disini */}
            <h2 className="judul-content">Plan Your Trip</h2>
            <div className="container-content">
              <div className="content-1">
                <div className="form-group">
                  <label>{origin ? "Dari" : "Ke"}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={
                      origin ? "Masukkan tempat asal" : "Masukkan tujuan"
                    }
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                  />
                </div>
              </div>
              <div className="content-1">
                <div className="icon-container">
                  <div className="icon" onClick={handleSwap}>
                    <MdSwapHorizontalCircle />
                  </div>
                </div>
              </div>
              <div className="content-1">
                <div className="form-group">
                  <label>{origin ? "Ke" : "Dari"}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={
                      origin ? "Masukkan tujuan" : "Masukkan tempat asal"
                    }
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
              </div>
              <div className="content-1">
                <div className="form-group-date">
                  <label>Berangkat</label>
                  <input type="date" className="date-control"></input>
                </div>
              </div>
              <div className="content-1">
                <div className="form-group-date">
                  <label>Pulang</label>
                  <input type="date" className="date-control"></input>
                </div>
              </div>
            </div>
            <div className="content-1">
              <div className="form-group-budget">
                <label className="budget">Budget</label>
                <input
                  type="text"
                  className="budget-control"
                  placeholder="Your Budget"
                ></input>
              </div>
            </div>
            {/* Konten Invite */}
            <div className="content-invite">
              <div className="button-invite" onClick={showFriendFormHandler}>
                <FaPlus /> Add Friends
              </div>
              
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      )}

      <section className="body-bantuan" id="bantuan">
        <div className="wrap-bantuan">
          <h2 className="judul-bantuan">Bagaimana cara menggunakannya?</h2>
        </div>
        <div className="content-bantuan">
          <div className="content-bantuan-vidio">
            <div className="vidio">
              {/* Letakkan konten video di sini */}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="Tutorial Penggunaan Fitur"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4>About Us</h4>
              <p>TripPlanner</p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li>Service 1</li>
                <li>Service 2</li>
                <li>Service 3</li>
                <li>Service 4</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <p>Email: TripPlanner@gmail.com</p>
              <p>Phone: +62897654321</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Trip Planner App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
