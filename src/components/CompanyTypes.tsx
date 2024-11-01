import React from 'react';
import { Building, Building2, Landmark } from 'lucide-react';

const CompanyTypes = () => {
  return (
    <section className="py-20 px-4 bg-violet-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">We Work With Companies of All Sizes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Building, title: 'Small Business', desc: 'Perfect solutions for startups and small teams' },
            { icon: Building2, title: 'Medium Enterprise', desc: 'Scalable solutions for growing companies' },
            { icon: Landmark, title: 'Large Corporation', desc: 'Enterprise-grade solutions for big organizations' }
          ].map((company, index) => (
            <div key={index} className="p-8 rounded-xl bg-violet-800/50 backdrop-blur-sm">
              <company.icon className="h-16 w-16 mx-auto mb-6 text-violet-400" />
              <h3 className="text-2xl font-semibold mb-4">{company.title}</h3>
              <p className="text-violet-200">{company.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTypes;