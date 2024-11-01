import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer web development, graphic design, UX/UI design, and social media management services tailored to your business needs.'
    },
    {
      question: 'How long does a typical web project take?',
      answer: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months.'
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, we offer ongoing maintenance packages to keep your website secure, updated, and performing optimally.'
    },
    {
      question: 'What is your design process?',
      answer: 'Our design process includes discovery, wireframing, design concepts, revisions, and final implementation, with client feedback at each stage.'
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-600 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;