import { useLanguage } from '../../contexts/LanguageContext'; 
import { Code2, Palette, Layout, Share2 } from 'lucide-react';

const services = [
  { icon: Code2, titleKey: 'services.web', descKey: 'services.web.desc' },
  { icon: Layout, titleKey: 'services.ui', descKey: 'services.ui.desc' },
  { icon: Palette, titleKey: 'services.graphic', descKey: 'services.graphic.desc' },
  { icon: Share2, titleKey: 'services.social', descKey: 'services.social.desc' }
];

function Services() {
  const { t } = useLanguage(); 

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <service.icon className="h-12 w-12 text-violet-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{t(service.titleKey)}</h3>
              <p className="text-gray-600">{t(service.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
