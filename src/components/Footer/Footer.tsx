import { useLanguage } from '../../contexts/LanguageContext'; 

function Footer() {
  const { t } = useLanguage(); 

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">{t('nav.services')}</h2>
          <p className="text-gray-400">{t('hero.description')}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('services.title')}</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#services" className="hover:text-white transition-colors">{t('nav.services')}</a></li>
            <li><a href="#portfolio" className="hover:text-white transition-colors">{t('nav.portfolio')}</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">{t('nav.about')}</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
          <ul className="space-y-2 text-gray-400">
            <li>verttexagenciadigital@gmail.com</li>
            <li>+54 (348) 436-5436</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>{t('contact.send')} © {new Date().getFullYear()} Verttex. {t('contact.select')}</p>
      </div>
    </footer>
  );
}

export default Footer;
