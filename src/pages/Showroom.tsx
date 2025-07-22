import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

function Showroom() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "showroom-visit" });
      cal("floatingButton", {
        "calLink": "cassler-lim-wacrxu/showroom-visit",
        "config": { "layout": "month_view", "theme": "light" },
        "buttonText": "Book a Showroom Visit",
        "buttonColor": "#255e7c"
      });
      cal("ui", {
        "theme": "light",
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#255e7c" },
          "dark": { "cal-brand": "#255e7c" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view"
      });
    })();
  }, []);

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0) 100%)',
    pointerEvents: 'none',
  };

  return (
    <div className="w-100">
      <header className="logo-header">
        <Navbar />
      </header>

      {/* Image Wrapper */}
      <div style={{
        width: '100%',
        height: '400px',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '2rem'
      }}>
        <img
          src="https://cdn.mos.cms.futurecdn.net/YCFw3jFWpCHg6eH4wKxU5f.jpg"
          alt="Showroom"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div style={overlayStyle}></div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '2rem',
          color: 'white',
          zIndex: 2
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Showroom</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px' }}>
            Visit our showroom to experience our products in person
          </p>
        </div>
      </div>

        {/* Showroom Features */}
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
            <div className="p-6">
              <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://cdn.xingosoftware.com/audioxpress/images/fetch/dpr_1,w_765,h_574,c_fit/https%3A%2F%2Faudioxpress.com%2Fassets%2Fupload%2Fimages%2F1%2F20241003004715_Sylvie-Bessou-DIVA-FOCAL-FrontWeb.jpg" alt="blog" />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Hi-Fi Audio
                </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-4">
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
              </div>
            </div>

            <div className="p-6">
              <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://restechtoday.com/wp-content/uploads/2023/08/Crestron_Home_4-copy.jpg" alt="blog" />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Home Automation
                </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-4">
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
              </div>
            </div>

            <div className="p-6">
              <img className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://www.lifewire.com/thmb/zi6G-MpnhoocI8T7X98QMwXCcxU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1126904785-64ee031a92444c16b204149c1dc810b2.jpg" alt="blog" />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                Smart Home Devices
                </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="mt-4">
                <a href="#" className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600" title="read more"> Read More » </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 bg-gray-900 rounded-4xl mb-16">
        <h2 className="text-3xl text-white mb-8">
          Showroom Location
        </h2>
        <p className="text-white mb-4">
          Unit 442-443, Main Wing Shangri-La Plaza, EDSA Corner Shaw Boulevard, Mandaluyong City
          </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          margin: '2rem 0', 
          padding: '0 2rem',
        }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30890.585220292083!2d121.01792167431637!3d14.580653100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c83fcff01b47%3A0x62535c336afa2088!2sShangri-La%20Plaza!5e0!3m2!1sen!2sph!4v1753077551873!5m2!1sen!2sph"
            width="1200"
            height="600"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Showroom;
