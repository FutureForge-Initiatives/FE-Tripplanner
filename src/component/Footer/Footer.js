import React from 'react';
import './Footer.css'; // Import file CSS untuk styling footer

// Komponen footer
function Footer() {
    return (
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
                        <p>Email: example@example.com</p>
                        <p>Phone: +1234567890</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Trip Planner App. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
