/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';

type Language = 'es' | 'en';

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

    // Faq
    'faq.title': 'Frequently Asked Questions',
    'faq.services': 'What services do you offer?',
    'faq.services.answer': 'We offer web development, graphic design, UX/UI design, and social media management services tailored to your business needs.',
    'faq.timeline': 'How long does a typical web project take?',
    'faq.timeline.answer': 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months.',
    'faq.maintenance': 'Do you offer maintenance services?',
    'faq.maintenance.answer': 'Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally.',
    'faq.designProcess': 'What is your design process?',
    'faq.designProcess.answer': 'Our design process includes discovery, wireframing, design concepts, revisions, and final implementation, with client feedback at each stage.',
    'faq.contact': "Can't find your answer?",
    'faq.contactLink': 'Contact us',

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

    // Faq
    'faq.title': 'Preguntas Frecuentes',
    'faq.services': '¿Qué servicios ofreces?',
    'faq.services.answer': 'Ofrecemos desarrollo web, diseño gráfico, diseño UX/UI y gestión de redes sociales adaptados a las necesidades de tu negocio.',
    'faq.timeline': '¿Cuánto tiempo lleva un proyecto web típico?',
    'faq.timeline.answer': 'Los plazos de los proyectos varían según la complejidad. Un sitio web simple puede llevar de 2 a 4 semanas, mientras que los proyectos más complejos pueden tardar de 2 a 3 meses.',
    'faq.maintenance': '¿Ofrecen servicios de mantenimiento?',
    'faq.maintenance.answer': 'Sí, ofrecemos paquetes de mantenimiento continuo para mantener tu sitio web seguro, actualizado y funcionando de manera óptima.',
    'faq.designProcess': '¿Cuál es su proceso de diseño?',
    'faq.designProcess.answer': 'Nuestro proceso de diseño incluye descubrimiento, creación de wireframes, conceptos de diseño, revisiones e implementación final, con retroalimentación del cliente en cada etapa.',
    'faq.contact': '¿No encuentras tu respuesta?',
    'faq.contactLink': 'Contáctanos',

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
  const [language, setLanguage] = useState<Language>('es');

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
