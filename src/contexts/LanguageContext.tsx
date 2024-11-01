import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Elevate Your Digital Presence',
    'hero.description': 'We craft exceptional digital experiences through innovative web development, captivating design, and strategic social media management.',
    'hero.cta.start': 'Get Started',
    'hero.cta.portfolio': 'View Portfolio',
    
    // Services
    'services.title': 'Our Services',
    'services.web': 'Web Development',
    'services.web.desc': 'Custom websites and web applications built with modern technologies',
    'services.ui': 'UX/UI Design',
    'services.ui.desc': 'User-centered design solutions that drive engagement and conversion',
    'services.graphic': 'Graphic Design',
    'services.graphic.desc': 'Eye-catching visuals that communicate your brand message',
    'services.social': 'Social Media',
    'services.social.desc': 'Strategic social media management to grow your online presence',
    
    // Companies
    'companies.title': 'We Work With Companies of All Sizes',
    'companies.small': 'Small Business',
    'companies.small.desc': 'Perfect solutions for startups and small teams',
    'companies.medium': 'Medium Enterprise',
    'companies.medium.desc': 'Scalable solutions for growing companies',
    'companies.large': 'Large Corporation',
    'companies.large.desc': 'Enterprise-grade solutions for big organizations',
    
    // Contact
    'contact.title': "Let's Work Together",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.service': 'Service Interested In',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.select': 'Select a service'
  },
  es: {
    // Navigation
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.about': 'Nosotros',
    'nav.faq': 'Preguntas',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Eleva tu Presencia Digital',
    'hero.description': 'Creamos experiencias digitales excepcionales a través del desarrollo web innovador, diseño cautivador y gestión estratégica de redes sociales.',
    'hero.cta.start': 'Comenzar',
    'hero.cta.portfolio': 'Ver Portafolio',
    
    // Services
    'services.title': 'Nuestros Servicios',
    'services.web': 'Desarrollo Web',
    'services.web.desc': 'Sitios web y aplicaciones personalizadas con tecnologías modernas',
    'services.ui': 'Diseño UX/UI',
    'services.ui.desc': 'Soluciones de diseño centradas en el usuario que impulsan el engagement',
    'services.graphic': 'Diseño Gráfico',
    'services.graphic.desc': 'Visuales atractivos que comunican el mensaje de tu marca',
    'services.social': 'Redes Sociales',
    'services.social.desc': 'Gestión estratégica de redes sociales para crecer tu presencia online',
    
    // Companies
    'companies.title': 'Trabajamos con Empresas de Todos los Tamaños',
    'companies.small': 'Pequeñas Empresas',
    'companies.small.desc': 'Soluciones perfectas para startups y equipos pequeños',
    'companies.medium': 'Medianas Empresas',
    'companies.medium.desc': 'Soluciones escalables para empresas en crecimiento',
    'companies.large': 'Grandes Corporaciones',
    'companies.large.desc': 'Soluciones empresariales para grandes organizaciones',
    
    // Contact
    'contact.title': 'Trabajemos Juntos',
    'contact.name': 'Nombre',
    'contact.email': 'Correo',
    'contact.service': 'Servicio de Interés',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.select': 'Selecciona un servicio'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};