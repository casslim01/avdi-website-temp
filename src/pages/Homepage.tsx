import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Important!
import Navbar from '../components/Navbar';
import HomeCarousel from '../components/HomeCarousel';
import VideoSection from '../components/VideoShowcase';
import Footer from '../components/Footer';
import BrandScroller from '../components/BrandScroller';

function Homepage() {
  return (
    <div className="w-100">
      <header className="logo-header">
        <Navbar />
      </header>
      
      <HomeCarousel />
      <VideoSection />
      <BrandScroller />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}


export default Homepage;
