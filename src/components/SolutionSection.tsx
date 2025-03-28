
import React from 'react';
import { Check, CircleDollarSign, TrendingUp, Lock, Sparkles } from 'lucide-react';

const SolutionSection = () => {
  const benefits = [
    {
      title: "Save 15+ hours weekly on financial tasks",
      icon: <Check className="h-5 w-5 text-wealthwhiz-green" />
    },
    {
      title: "Reduce financial errors by up to 98%",
      icon: <Check className="h-5 w-5 text-wealthwhiz-green" />
    },
    {
      title: "Enhanced investor confidence with real-time reporting",
      icon: <Check className="h-5 w-5 text-wealthwhiz-green" />
    },
    {
      title: "Make data-driven decisions with AI-powered insights",
      icon: <Check className="h-5 w-5 text-wealthwhiz-green" />
    }
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-wealthwhiz-blue">
              Simplify Your Financial Management with WealthWhiz
            </h2>
            
            <p className="text-lg text-gray-600">
              WealthWhiz unifies your financial ecosystem with AI-powered tools that automate tedious tasks, 
              provide real-time insights, and help you make strategic decisions that drive growth.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 bg-wealthwhiz-green/10 p-1 rounded-full">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-700">{benefit.title}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-wealthwhiz-blue p-6 rounded-xl text-white">
              <CircleDollarSign className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Unified Finance</h3>
              <p className="text-white/80">Banking, accounting, and invoicing in one platform</p>
            </div>
            
            <div className="bg-wealthwhiz-blue-light p-6 rounded-xl text-white">
              <TrendingUp className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Insights</h3>
              <p className="text-white/80">Predictive analytics for strategic planning</p>
            </div>
            
            <div className="bg-wealthwhiz-gray-light p-6 rounded-xl">
              <Lock className="h-10 w-10 mb-4 text-wealthwhiz-blue" />
              <h3 className="text-xl font-semibold mb-2 text-wealthwhiz-blue">Secure Platform</h3>
              <p className="text-gray-600">Bank-level security for all your financial data</p>
            </div>
            
            <div className="bg-wealthwhiz-green p-6 rounded-xl text-white">
              <Sparkles className="h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered</h3>
              <p className="text-white/80">Smart recommendations and automation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
