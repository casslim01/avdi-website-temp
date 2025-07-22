import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ContactUs as ContactForm } from '../components/ContactForm';

function Contact() {

  return (
    <div className="w-100">
      <header className="logo-header">
        <Navbar />
      </header>
      <main className="container mx-auto px-4">
        <div className="flex flex-row justify-center items-start gap-8 my-8">
          <div className="w-2/3">
            <ContactForm />
          </div>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default Contact