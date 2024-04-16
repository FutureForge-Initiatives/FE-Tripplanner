import React from 'react';
import './about.css'; // Import file CSS untuk styling halaman

// Komponen halaman Trip Planner
function About() {
    return (
        <div className="trip-planner">
            <header>
                <h1>Welcome to Trip Planner</h1>
            </header>
            <main>
                <section className="about">
                    <h2>About Us</h2>
                    <p>Aplikasi Trip Planner memudahkan Anda merencanakan perjalanan Anda tanpa ribet. Dengan berbagai fitur yang dapat disesuaikan, Anda dapat membuat rencana perjalanan sesuai keinginan Anda. Mendapatkan informasi yang lengkap dan akurat tentang destinasi dan rute perjalanan Anda.</p>
                </section>
                <section className="features">
                    <h2>Features</h2>
                    <ul>
                        <li>Plan your trips easily</li>
                        <li>Save your favorite destinations</li>
                        <li>Get recommendations for places to visit</li>
                        <li>Share your trips with friends</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default About;
