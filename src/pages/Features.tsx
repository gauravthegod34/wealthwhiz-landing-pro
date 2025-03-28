
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CircleDollarSign, TrendingUp, Users, Sparkles, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: <CircleDollarSign className="h-16 w-16 text-wealthwhiz-blue-light" />,
      title: "Autonomous Cash Flow Management",
      description: "AI-powered insights and predictive analytics ensure you always know your financial position and upcoming needs.",
      details: [
        "Real-time cash flow monitoring and forecasting",
        "Automated transaction categorization with machine learning",
        "Cash flow anomaly detection and alerts",
        "Scenario planning and financial stress testing",
        "Revenue and expense trend analysis"
      ]
    },
    {
      icon: <TrendingUp className="h-16 w-16 text-wealthwhiz-blue-light" />,
      title: "Automated Financial Reporting",
      description: "Generate comprehensive financial reports with one click. Real-time dashboards keep everyone informed.",
      details: [
        "One-click financial statement generation (P&L, Balance Sheet, Cash Flow)",
        "Custom report builder with drag-and-drop interface",
        "Automated compliance reporting for tax and regulatory requirements",
        "Data visualization with customizable charts and graphs",
        "Scheduled report delivery to stakeholders"
      ]
    },
    {
      icon: <Users className="h-16 w-16 text-wealthwhiz-blue-light" />,
      title: "Investor Transparency Portal",
      description: "Give stakeholders secure access to real-time financial data and performance metrics on their own dashboard.",
      details: [
        "Secure investor portal with granular permission controls",
        "Real-time KPI tracking and performance metrics",
        "Interactive financial dashboards for investors",
        "Document sharing and e-signature capabilities",
        "Investor communication and Q&A tools"
      ]
    },
    {
      icon: <Sparkles className="h-16 w-16 text-wealthwhiz-blue-light" />,
      title: "AI-Driven Strategy Recommendations",
      description: "Receive personalized recommendations for expense optimization and business growth opportunities.",
      details: [
        "AI-powered expense analysis and optimization suggestions",
        "Growth opportunity identification based on financial patterns",
        "Competitive benchmarking against industry standards",
        "Scenario modeling for business decisions",
        "Budget optimization recommendations"
      ]
    },
    {
      icon: <Leaf className="h-16 w-16 text-wealthwhiz-green" />,
      title: "Sustainability Impact Tracking",
      description: "Monitor your company's environmental footprint and track progress on green initiatives.",
      details: [
        "Carbon footprint calculation and tracking",
        "ESG (Environmental, Social, Governance) reporting tools",
        "Sustainability benchmarking against industry standards",
        "Green initiative ROI analysis",
        "Automated ESG compliance documentation"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-wealthwhiz-blue to-wealthwhiz-blue-light text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Modern Finance</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Explore the comprehensive suite of AI-powered tools designed to transform your financial management.
            </p>
          </div>
        </section>
        
        {/* Features Detail Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-16">
              {features.map((feature, index) => (
                <div key={index} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="bg-wealthwhiz-gray-light p-8 rounded-xl flex items-center justify-center">
                    <div className="bg-white p-6 rounded-full shadow-lg">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-wealthwhiz-blue">{feature.title}</h2>
                    <p className="text-lg text-gray-600">{feature.description}</p>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-wealthwhiz-blue-light">Key Capabilities</CardTitle>
                        <CardDescription>Everything you need to succeed</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {feature.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="mt-1 h-5 w-5 bg-wealthwhiz-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <div className="h-2.5 w-2.5 rounded-full bg-wealthwhiz-green"></div>
                              </div>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-wealthwhiz-blue-light text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Management?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join thousands of startups that are streamlining their finances with WealthWhiz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/dashboard" className="bg-white text-wealthwhiz-blue-light hover:bg-opacity-90 px-8 py-3 rounded-md font-medium text-lg">
                Try Dashboard Demo
              </a>
              <a href="/" className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md font-medium text-lg">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
