
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-wealthwhiz-blue">
            Wealth<span className="text-wealthwhiz-blue-light">Whiz</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-gray-700 hover:text-wealthwhiz-blue-light transition-colors">
            Features
          </Link>
          <a href="#about" className="text-gray-700 hover:text-wealthwhiz-blue-light transition-colors">
            About
          </a>
          <a href="#tech" className="text-gray-700 hover:text-wealthwhiz-blue-light transition-colors">
            Tech Stack
          </a>
          <Link to="/dashboard" className="bg-wealthwhiz-blue-light hover:bg-wealthwhiz-blue text-white px-4 py-2 rounded-md">
            Log In
          </Link>
          <Button className="bg-wealthwhiz-green hover:opacity-90 text-white">
            Sign Up Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-gray-700 hover:text-wealthwhiz-blue-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <a 
              href="#about" 
              className="text-gray-700 hover:text-wealthwhiz-blue-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tech" 
              className="text-gray-700 hover:text-wealthwhiz-blue-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech Stack
            </a>
            <Link 
              to="/dashboard" 
              className="bg-wealthwhiz-blue-light hover:bg-wealthwhiz-blue text-white py-2 px-4 rounded-md text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Log In
            </Link>
            <Button className="bg-wealthwhiz-green hover:opacity-90 text-white w-full">
              Sign Up Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
