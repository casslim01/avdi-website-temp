import { useEffect } from 'react';
import './BrandScroller.css';

// Import all brand images
import logo1 from "../images/brands/AVDI_Acoustic-Signature-logo-300x150.png";
import logo2 from "../images/brands/AVDI_Aurender-logo-300x150.png";
import logo3 from "../images/brands/AVDI_Braco-Residential-min-].png";
import logo4 from "../images/brands/AVDI_Cardas-Audio-logo-300x150.png";
import logo5 from "../images/brands/AVDI_dCS-300x150.png";
import logo6 from "../images/brands/AVDI_Devialet-logo-300x150.png";
import logo7 from "../images/brands/AVDI_Dream-Vision-min-300x150.png";
import logo8 from "../images/brands/AVDI_Epson-min-300x150.png";
import logo9 from "../images/brands/AVDI_Focal-logo-300x150.png";
import logo10 from "../images/brands/AVDI_Gryphon-Audio-Designs-logo-300x150.png";
import logo11 from "../images/brands/AVDI_KimberKable-min-300x150.png";
import logo12 from "../images/brands/AVDI_Kronos-logo-300x150.png";
import logo13 from "../images/brands/AVDI_Mad-VR-min-300x150.png";
import logo14 from "../images/brands/AVDI_Naim-300x150.png";
import logo15 from "../images/brands/AVDI_Nordost-logo-300x150.png";
// ...import the rest as needed

const brandLogos = [
  { src: logo1, alt: "Acoustic Signature" },
  { src: logo2, alt: "Aurender" },
  { src: logo3, alt: "Braco Residential" },
  { src: logo4, alt: "Cardas Audio" },
  { src: logo5, alt: "dCS" },
  { src: logo6, alt: "Devialet" },
  { src: logo7, alt: "Dream Vision" },
  { src: logo8, alt: "Epson" },
  { src: logo9, alt: "Focal" },
  { src: logo10, alt: "Gryphon Audio Designs" },
  { src: logo11, alt: "Kimber Kable" },
  { src: logo12, alt: "Kronos" },
  { src: logo13, alt: "Mad VR" },
  { src: logo14, alt: "Naim" },
  { src: logo15, alt: "Nordost" },
  // ...add the rest as needed
];

const BrandScroller = () => {
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");

        // If a user hasn't opted in for reduced motion, then we add the animation
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", "true");

                const scrollerInner = scroller.querySelector(".scroller__inner");
                if (!scrollerInner) return;
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true) as HTMLElement;
                    duplicatedItem.setAttribute("aria-hidden", "true");
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div className="scroller" data-direction="left" data-speed="slow">
            <div className="scroller__inner">
                {brandLogos.map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo.src}
                    alt={logo.alt}
                    style={{ height: '80px', objectFit: 'contain', margin: '0 16px' }}
                  />
                ))}
            </div>
        </div>
    );
};

export default BrandScroller;