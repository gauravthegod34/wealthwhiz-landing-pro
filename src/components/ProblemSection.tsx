
import React from 'react';
import { CircleDollarSign, Users, AlertTriangle, TrendingDown } from 'lucide-react';

const ProblemSection = () => {
  const painPoints = [
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      title: 'Cash Flow Issues',
      description: 'Struggling to predict income and expenses leads to cash shortfalls and financial stress.'
    },
    {
      icon: <Users className="h-8 w-8 text-amber-500" />,
      title: 'Investor Transparency',
      description: 'Manually created financial reports delay critical information sharing with stakeholders.'
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      title: 'Manual Errors',
      description: 'Human error in financial data entry and calculations results in costly mistakes.'
    },
    {
      icon: <CircleDollarSign className="h-8 w-8 text-teal-500" />,
      title: 'Sustainability Tracking',
      description: 'Difficulty measuring and reporting environmental impact of business operations.'
    },
  ];

  return (
    <section className="bg-wealthwhiz-gray-light section-padding" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wealthwhiz-blue">
            Why Startups Struggle with Financial Management
          </h2>
          <p className="text-lg text-gray-600">
            Financial management is complex and time-consuming, pulling founders away from growth-focused activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-100 rounded-full">
                  {point.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-wealthwhiz-blue">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
