
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, BarChart3, FileText, Users, Settings, CreditCard, HelpCircle, LogOut } from 'lucide-react';

const DashboardSidebar = () => {
  const menuItems = [
    { icon: <Home className="h-5 w-5" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <BarChart3 className="h-5 w-5" />, label: 'Analytics', path: '#' },
    { icon: <CreditCard className="h-5 w-5" />, label: 'Transactions', path: '#' },
    { icon: <FileText className="h-5 w-5" />, label: 'Reports', path: '#' },
    { icon: <Users className="h-5 w-5" />, label: 'Investors', path: '#' },
    { icon: <Settings className="h-5 w-5" />, label: 'Settings', path: '#' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-wealthwhiz-blue text-white border-r">
      <div className="p-6 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">WealthWhiz</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-4">
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t border-white/10">
        <div className="space-y-1">
          <Link
            to="#"
            className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <HelpCircle className="h-5 w-5" />
            <span>Help & Support</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors"
          >
            <LogOut className="h-5 w-5" />
            <span>Back to Landing</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
