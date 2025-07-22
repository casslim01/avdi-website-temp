import React, { useState } from 'react';
import { Facebook, Instagram, Phone, ChevronDown, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showContact, setShowContact] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  
  return (
    <footer className="bg-gray-900 text-white py-2 sm:py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Quick Links */}
          <div className="border-b lg:border-b-0 border-gray-700 py-4 lg:pb-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-auto"
            >
              <h3 className="text-xl font-bold mb-2 lg:mb-4 h-10 flex items-center">Office</h3>
              <div className="lg:hidden">
              </div>
            </div>
            <ul className="list-none m-0 p-0">
              <li>No. 26 General Tirona St.,</li>
              <li>Caloocan City 1400,</li>
              <li>Metro Manila Philippines</li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="border-b lg:border-b-0 border-gray-700 py-4 lg:py-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-auto"
              onClick={() => setShowContact(!showContact)}
            >
              <h3 className="text-xl font-bold mb-2 lg:mb-4 h-10 flex items-center">Contact No.</h3>
              <div className="lg:hidden">
                {showContact ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <div className={`space-y-2 ${showContact ? 'block' : 'hidden'} lg:block`}>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">+1 (555) 987-6543</span>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="py-4 lg:py-0">
            <div 
              className="flex justify-between items-center cursor-pointer lg:cursor-auto"
              onClick={() => setShowSocial(!showSocial)}
            >
              <h3 className="text-xl font-bold mb-2 lg:mb-4 h-10 flex items-center">Follow Us</h3>
              <div className="lg:hidden">
                {showSocial ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </div>
            <div className={`flex space-x-4 ${showSocial ? 'block' : 'hidden'} lg:flex`}>
              <a href="#instagram" className="hover:text-gray-300 transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#facebook" className="hover:text-gray-300 transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm sm:text-base">© {currentYear} Audio Visual Driver International 
            <span style={{color: 'aquamarine'}}> | </span> All Rights Reserved 
            <span style={{color: 'aquamarine'}}> | </span> Powered by CWL</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;