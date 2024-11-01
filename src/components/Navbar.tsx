import { useState, useEffect } from 'react';
import { Menu, X, Globe2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: 'services' },
    { name: t('nav.portfolio'), href: 'portfolio' },
    { name: t('nav.about'), href: 'about' },
    { name: t('nav.faq'), href: 'faq' },
    { name: t('nav.contact'), href: 'contact' }
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className={`text-2xl font-bold ${isScrolled ? 'text-violet-900' : 'text-white'}`}>
              Verttex
            </a>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className={`${isScrolled ? 'text-gray-700 hover:text-violet-700' : 'text-white/90 hover:text-white'
                    } transition-colors font-medium cursor-pointer`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-700 hover:text-violet-700' : 'text-white/90 hover:text-white'
                  } cursor-pointer`}
              >
                <Globe2 className="h-5 w-5" />
                <span className="uppercase">{language}</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'
                } cursor-pointer`}
            >
              <Globe2 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'
                } p-2 cursor-pointer`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute top-full left-0 w-full">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 text-gray-700 hover:text-violet-700 font-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
