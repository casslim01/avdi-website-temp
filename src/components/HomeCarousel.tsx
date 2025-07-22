import Carousel from 'react-bootstrap/Carousel';
// Removed: import ExampleCarouselImage from 'components/ExampleCarouselImage';

// --- Option 1: If images are in the 'public' folder ---
// const image1 = '/images/your-fade-image-1.jpg'; // Replace with your actual image path
// const image2 = '/images/your-fade-image-2.jpg'; // Replace with your actual image path
// const image3 = '/images/your-fade-image-3.jpg'; // Replace with your actual image path

// --- Option 2: Importing images directly (if your bundler like Webpack is configured for it) ---
import image1 from '../images/mhouse-1.jpg'; // Adjust path as needed
import image2 from '../images/mhouse-2.jpg'; // Adjust path as needed
import image3 from '../images/mhouse-3.jpg'; // Adjust path as needed

// For demonstration, I'll use different placeholder URLs to distinguish.
// Replace these with your actual image paths or imported variables from above.
// const image1 = 'https://via.placeholder.com/800x400/FF0000/FFFFFF?text=Fade+Slide+1'; // Red background
// const image2 = 'https://via.placeholder.com/800x400/00FF00/FFFFFF?text=Fade+Slide+2'; // Green background
// const image3 = 'https://via.placeholder.com/800x400/0000FF/FFFFFF?text=Fade+Slide+3'; // Blue background

interface CarouselProps {
  images?: { src: string; alt: string; title: string; description: string }[];
}

function HomeCarousel({ images = [] }: CarouselProps) {
  // Default images if none provided
  const defaultImages = [
    { 
      src: image1, 
      alt: "First slide", 
      title: "First slide label", 
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      src: image2, 
      alt: "Second slide", 
      title: "Second slide label", 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
    },
    { 
      src: image3, 
      alt: "Third slide", 
      title: "Third slide label", 
      description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur." 
    }
  ];

  const carouselImages = images.length > 0 ? images : defaultImages;

  // Styles for full-width layout
  const containerStyle: React.CSSProperties = {
    margin: 0,
    padding: 0,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
};

  const imageStyle: React.CSSProperties = {
    display: 'block',
    width: 'auto',
    height: '100%',
    maxHeight: '600px',
    objectFit: 'cover',
  };

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
    <div style={containerStyle}>
      <Carousel interval={8000} fade className="w-100" pause="hover">
        {carouselImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              style={imageStyle}
            />
            <div style={overlayStyle}></div>
            <Carousel.Caption>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HomeCarousel;