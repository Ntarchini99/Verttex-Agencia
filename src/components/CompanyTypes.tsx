import { Building, Building2, Landmark } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CompanyTypes = () => {
  const { t } = useLanguage();

  const companyTypes = [
    { icon: Building, key: 'companies.small' },
    { icon: Building2, key: 'companies.medium' },
    { icon: Landmark, key: 'companies.large' },
  ];

  return (
    <section className="py-20 px-4 bg-violet-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">{t('companies.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {companyTypes.map((company, index) => (
            <div key={index} className="p-8 rounded-xl bg-violet-800/50 backdrop-blur-sm transform transition-transform duration-200 hover:scale-105">
              <company.icon className="h-16 w-16 mx-auto mb-6 text-violet-400" aria-hidden="true" />
              <h3 className="text-2xl font-semibold mb-4">{t(company.key)}</h3>
              <p className="text-violet-200">{t(`${company.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTypes;
