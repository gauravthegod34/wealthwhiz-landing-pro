
import React from 'react';

const TechStackSection = () => {
  const techCategories = [
    {
      title: "Frontend",
      technologies: ["React", "Vite", "Tailwind CSS"],
      color: "bg-blue-500"
    },
    {
      title: "Backend",
      technologies: ["Node.js", "Express", "GraphQL"],
      color: "bg-green-500"
    },
    {
      title: "Database",
      technologies: ["MongoDB", "Redis", "Prisma ORM"],
      color: "bg-purple-500"
    },
    {
      title: "API Integrations",
      technologies: ["UPTIQ Console APIs", "Banking APIs", "Payment Gateways"],
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="bg-wealthwhiz-blue text-white section-padding" id="tech">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built With Modern Tech
          </h2>
          <p className="text-lg opacity-80">
            Our platform leverages cutting-edge technologies to deliver a secure, scalable, and responsive experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 card-hover"
            >
              <div className={`w-12 h-12 ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                <span className="text-xl font-bold text-white">{category.title.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.technologies.map((tech, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-wealthwhiz-blue-light"></div>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
