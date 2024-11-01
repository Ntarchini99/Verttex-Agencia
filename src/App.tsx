// App.jsx
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import PortfolioGrid from './components/PortfolioGrid';
import CompanyTypes from './components/CompanyTypes';
import Header from './components/Header';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Header />
      <Services />
      <section id="portfolio">
        <PortfolioGrid />
      </section>
      <section id="about">
        <CompanyTypes />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
