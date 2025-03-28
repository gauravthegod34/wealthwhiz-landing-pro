
import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wealthwhiz-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Wealth<span className="text-wealthwhiz-blue-light">Whiz</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Smart financial management for modern businesses. Simplify, automate, and grow with AI-powered insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} WealthWhiz. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-wealthwhiz-blue-light text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-wealthwhiz-blue-light text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-wealthwhiz-blue-light text-sm transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
