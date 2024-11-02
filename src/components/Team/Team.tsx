import React from 'react';

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Tu Nombre',
    position: 'CEO',
    image: 'https://randomuser.me/api/portraits/men/1.jpg', 
  },
  {
    name: 'Ana Pérez',
    position: 'Diseñadora UX UI',
    image: 'https://randomuser.me/api/portraits/women/2.jpg', 
  },
  {
    name: 'Luis García',
    position: 'Community Manager',
    image: 'https://randomuser.me/api/portraits/men/3.jpg', 
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
