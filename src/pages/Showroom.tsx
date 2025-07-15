// import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; // <-- Important!
import Navbar from '../components/Navbar';
// import HomeCarousel from '../components/HomeCarousel'; 
// import VideoSection from '../components/VideoShowcase'; 
import Footer from '../components/Footer';

// import BrandScroller from '../components/BrandScroller'; 


function Showroom() {
  return (
    <div className="w-100">
      <header className="logo-header">
        <Navbar />
      </header>

            {/* Google Maps Embed */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' , padding: '0 2rem' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722.646305073021!2d121.04650329357914!3d14.580653100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c83fcff01b47%3A0x62535c336afa2088!2sShangri-La%20Plaza!5e0!3m2!1sen!2sph!4v1747972840998!5m2!1sen!2sph"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Shangri-La Plaza Map"
        />
        <div className="text-white p-4 rounded my-3 justify-right ms-4"
        style={{ backgroundColor: '#255e7c', color: '#222' }}>
        <h2>Come and Experience the Showroom!</h2>
        <p>
            Unit 442 – 443, Main Wing Shangri-La Plaza, <br />
            EDSA Corner Shaw Boulevard, Mandaluyong City, <br />
            Metro Manila Philippines, 1550
        </p>
        </div>
      </div>


      <footer>
        <Footer />
      </footer>
    </div>
  );
}


export default Showroom;
