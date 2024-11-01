import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext'; 

function Header() {
    const { t } = useLanguage(); 

    return (
        <header className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-900 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070"
                    alt="Office workspace"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            {t('hero.title')} <span className="text-violet-400">Digital Presence</span>
                        </h1>
                        <p className="text-xl text-gray-200 mb-8">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="px-8 py-3 text-lg font-medium text-white bg-violet-600 rounded-full hover:bg-violet-700 transition-colors inline-flex items-center"
                            >
                                {t('hero.cta.start')} <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <a
                                href="#portfolio"
                                className="px-8 py-3 text-lg font-medium text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors"
                            >
                                {t('hero.cta.portfolio')}
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-violet-500/20 rounded-full blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <ChevronDown className="h-8 w-8 text-white" />
            </div>
        </header>
    );
}

export default Header;
