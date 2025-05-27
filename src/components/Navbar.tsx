import React, { useState } from 'react';
import AVDILogo from "../images/avdi-logo.png";
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [hovered, setHovered] = useState<string | null>(null);

  // Define menu items
  const menuItems = [
    { label: 'HOME', to: '/' },
    { label: 'PROJECTS', to: '/projects' },
    { label: 'SHOWROOM', to: '/showroom' },
    { label: 'BRANDS', to: '/brands' },
    { label: 'ABOUT US', to: '/about' },
  ];
  
  // CSS styles
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      width: '100%',
      backgroundColor: '',
    },
    logoContainer: {
      marginBottom: '1rem',
      marginTop: '1rem'
    },
    logo: {
      height: '4rem'
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem'
    },
    navButton: (isActive: boolean) => ({
      padding: '0.5rem 2.5rem',
      transition: 'all 300ms ease-in-out',
      position: 'relative' as const,
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: 'none',
      color: isActive ? '#000' : '#666'
    }),
    buttonUnderline: (isActive: boolean) => ({
      position: 'absolute' as const,
      bottom: 0,
      left: 0,
      width: '100%',
      height: '2px',
      transition: 'all 300ms',
      backgroundColor: isActive ? '#3b82f6' : 'transparent'
    }),
    separator: {
      width: '100%',
      borderBottom: '1px solid #d1d5db',
      marginTop: '1rem'
    }
  };
  
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    setHovered(item);
    e.currentTarget.style.color = '#000';
    e.currentTarget.style.transform = 'translateY(-4px)';
  };
  
  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setHovered(null);
    e.currentTarget.style.color = '#666';
    e.currentTarget.style.transform = 'translateY(0)';
  };
  
  return (
    <div style={styles.container}>
      {/* Logo above the navigation buttons */}
      <div style={styles.logoContainer}>
        <img
          height={100}
          src={AVDILogo}
          alt="Company Logo"
          style={styles.logo}
        />
      </div>
      
      {/* Navigation Menu */}
      <div style={styles.navContainer}>
        <nav style={styles.nav}>
          {menuItems.map((item) => {
            const isActive = location.pathname === item.to;
            const isHovered = hovered === item.label;
            return (
              <Link
                className='decoration-none'
                key={item.label}
                to={item.to}
                style={styles.navButton(isActive || isHovered)}
                onMouseEnter={(e) => handleMouseEnter(e, item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.label}
                <div style={styles.buttonUnderline(isActive || isHovered)} />
              </Link>
            );
          })}
        </nav>
      </div>
      
      {/* Separation line */}
      <div style={styles.separator} />
    </div>
  );
};

export default Header;