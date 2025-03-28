
import React from 'react';
import { CircleDollarSign, TrendingUp, Users, Sparkles, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: <CircleDollarSign className="h-10 w-10 text-wealthwhiz-blue-light" />,
      title: "Autonomous Cash Flow Management",
      description: "AI-powered insights and predictive analytics ensure you always know your financial position and upcoming needs.",
      bullets: ["Cash flow forecasting", "Automated categorization", "Anomaly detection"]
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-wealthwhiz-blue-light" />,
      title: "Automated Financial Reporting",
      description: "Generate comprehensive financial reports with one click. Real-time dashboards keep everyone informed.",
      bullets: ["Real-time dashboards", "Custom report builder", "Regulatory compliance"]
    },
    {
      icon: <Users className="h-10 w-10 text-wealthwhiz-blue-light" />,
      title: "Investor Transparency Portal",
      description: "Give stakeholders secure access to real-time financial data and performance metrics on their own dashboard.",
      bullets: ["Secure data access", "Instant query resolution", "Performance tracking"]
    },
    {
      icon: <Sparkles className="h-10 w-10 text-wealthwhiz-blue-light" />,
      title: "AI-Driven Strategy Recommendations",
      description: "Receive personalized recommendations for expense optimization and business growth opportunities.",
      bullets: ["Expense optimization", "Growth strategies", "Competitive analysis"]
    },
    {
      icon: <Leaf className="h-10 w-10 text-wealthwhiz-green" />,
      title: "Sustainability Impact Tracking",
      description: "Monitor your company's environmental footprint and track progress on green initiatives.",
      bullets: ["Carbon footprint tracking", "ESG reporting", "Impact measurement"]
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-wealthwhiz-gray-light section-padding" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wealthwhiz-blue">
            Core Features
          </h2>
          <p className="text-lg text-gray-600">
            Our comprehensive suite of tools puts financial intelligence at your fingertips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow overflow-hidden card-hover">
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-wealthwhiz-blue">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="h-1.5 w-1.5 rounded-full bg-wealthwhiz-blue-light"></div>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
