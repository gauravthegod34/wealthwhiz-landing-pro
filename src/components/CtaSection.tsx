
import React from 'react';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="bg-wealthwhiz-blue-light text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Real-Time Insights Today
            </h2>
            <p className="text-lg opacity-90 max-w-lg">
              Start making smarter financial decisions with WealthWhiz. Free for 30 days, no credit card required.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-wealthwhiz-blue-light hover:bg-opacity-90 px-8 py-6 text-lg">
              Sign Up Free
            </Button>
            <Button variant="outline" className="border-white bg-transparent hover:bg-white/10 px-8 py-6 text-lg">
              <TrendingUp className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
