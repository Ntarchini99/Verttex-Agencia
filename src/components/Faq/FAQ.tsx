import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext'; 

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const faqs = [
    {
      question: t('faq.services'),
      answer: t('faq.services.answer'),
    },
    {
      question: t('faq.timeline'),
      answer: t('faq.timeline.answer'),
    },
    {
      question: t('faq.maintenance'),
      answer: t('faq.maintenance.answer'),
    },
    {
      question: t('faq.designProcess'),
      answer: t('faq.designProcess.answer'),
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{t('faq.title')}</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 py-4 text-gray-600 border-t transition-all duration-200 ease-in-out max-h-0 overflow-hidden">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            {t('faq.contact')}
            <a href="/contact" className="text-blue-600"> {t('faq.contactLink')}</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
