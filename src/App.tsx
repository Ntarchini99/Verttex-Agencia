// App.jsx
import Navbar from './components/Navbar/Navbar';
import WhatsAppButton from './components/WhatsappButton/WhatsAppButton';
import FAQ from './components/Faq/FAQ';
import ContactForm from './components/ContactForm/ContactForm';
import PortfolioGrid from './components/Portfolio/PortfolioGrid';
import CompanyTypes from './components/Company/CompanyTypes';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

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
