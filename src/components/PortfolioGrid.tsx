import { useLanguage } from '../contexts/LanguageContext';

const PortfolioGrid = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: 'Fourth Seed Miami',
      category: 'Web Development',
      image: 'https://i.postimg.cc/yY178Vc9/1.png',
      url: 'https://fourthseedllc.netlify.app/'
    },
    {
      title: 'BlackLab Strategies',
      category: 'Web Development',
      image: 'https://i.postimg.cc/9Mycr0LP/3.png',
      url: 'https://blacklabstrategies.netlify.app/home'
    },
    {
      title: 'Sabor Arte - Restaurante',
      category: 'Web Development',
      image: 'https://i.postimg.cc/nVYHxsjp/4.png',
      url: 'https://saborarrte.netlify.app/'
    },
    {
      title: 'Crypto Software',
      category: 'Web Development',
      image: 'https://i.postimg.cc/8cDNWGY2/5.png',
      url: 'https://cryptossoftware.netlify.app/'
    },
    {
      title: 'CloudHaven',
      category: 'Web Development',
      image: 'https://i.postimg.cc/QM2X81Jx/2.png',
      url: 'https://cloudhavenn.netlify.app/'
    },
    {
      title: 'Agencia Digital',
      category: 'Web Development',
      image: 'https://i.postimg.cc/VvR1WTQd/6.png',
      url: 'https://verttexagencia.netlify.app/'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          {t('Portfolio')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {t(project.title)}
                </h3>
                <p className="text-gray-300">
                  {t(project.category)}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
