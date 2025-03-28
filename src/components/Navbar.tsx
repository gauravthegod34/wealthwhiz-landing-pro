
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black text-white backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-wealthwhiz-blue-light">
            Wealth<span className="text-white">Whiz</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">
            Features
          </Link>
          <a href="#about" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">
            About
          </a>
          <a href="#tech" className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors">
            Tech Stack
          </a>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="bg-wealthwhiz-blue-light hover:bg-wealthwhiz-blue text-white px-4 py-2 rounded-md">
                Dashboard
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-gray-800">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="text-sm">
                    <span className="font-medium">{user.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()} className="text-red-500 cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Link to="/auth" className="bg-wealthwhiz-blue-light hover:bg-wealthwhiz-blue text-white px-4 py-2 rounded-md">
                Log In
              </Link>
              <Button className="bg-wealthwhiz-green hover:opacity-90 text-white" asChild>
                <Link to="/auth?tab=signup">Sign Up Free</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:bg-gray-800">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/features" 
              className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#tech" 
              className="text-gray-300 hover:text-wealthwhiz-blue-light transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tech Stack
            </a>
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="bg-wealthwhiz-blue-light hover:bg-wealthwhiz-blue text-white py-2 px-4 rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button 
                  variant="ghost"
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="justify-start px-0 text-red-500 hover:bg-transparent"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </Button>
              </>
            ) : (
              <>
                <Link 
                  to="/auth" 
                  className="bg-wealthwhiz-blue-light hover:bg-wealthwhiz-blue text-white py-2 px-4 rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
                <Button 
                  className="bg-wealthwhiz-green hover:opacity-90 text-white w-full"
                  asChild
                >
                  <Link 
                    to="/auth?tab=signup"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up Free
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
