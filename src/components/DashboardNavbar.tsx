
import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const DashboardNavbar = () => {
  return (
    <header className="border-b bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center md:w-72 lg:w-80 xl:w-96">
          <h1 className="text-xl font-bold text-wealthwhiz-blue">
            Wealth<span className="text-wealthwhiz-blue-light">Whiz</span>
          </h1>
        </div>
        
        <div className="hidden md:flex relative flex-1 mx-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input className="pl-10 pr-4" placeholder="Search transactions, invoices, reports..." />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-wealthwhiz-blue-light text-white flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium">Demo User</p>
              <p className="text-xs text-gray-500">demo@wealthwhiz.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;
