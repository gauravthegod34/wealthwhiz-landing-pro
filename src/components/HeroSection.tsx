
import React from 'react';
import { Button } from '@/components/ui/button';
import { CircleDollarSign, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="hero-gradient text-white min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Smart Finance. <br />
              <span className="text-wealthwhiz-green">Smarter Growth.</span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-lg">
              Unify your banking, accounting, and invoicing in one AI-powered platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-wealthwhiz-green hover:bg-opacity-90 text-white px-8 py-6 text-lg">
                Get Started for Free
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                <CircleDollarSign className="h-4 w-4" />
                <span>AI-Powered Finance</span>
              </div>
              <div className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full">
                <TrendingUp className="h-4 w-4" />
                <span>Real-time Analytics</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[400px] md:h-[500px] bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center overflow-hidden">
              <div className="w-[80%] h-[80%] bg-gradient-to-br from-wealthwhiz-blue-light/30 to-wealthwhiz-green/30 rounded-lg shadow-xl animate-float">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="mb-4 rounded-full bg-white/20 p-4 inline-block">
                      <CircleDollarSign className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold">WealthWhiz Dashboard</h3>
                    <p className="text-sm opacity-80 mt-2">Intelligent finance at your fingertips</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-wealthwhiz-green/20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-wealthwhiz-blue-light/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
