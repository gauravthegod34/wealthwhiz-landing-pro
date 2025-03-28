
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, BellRing, DollarSign, Calendar, PieChart, BarChart3, TrendingUp, AlertTriangle, Bell } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import DashboardNavbar from '../components/DashboardNavbar';
import DashboardSidebar from '../components/DashboardSidebar';
import CashFlowChart from '../components/dashboard/CashFlowChart';
import UpcomingPayments from '../components/dashboard/UpcomingPayments';
import BudgetOverview from '../components/dashboard/BudgetOverview';
import Alerts from '../components/dashboard/Alerts';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock authentication for demo - In a real app this would check authentication state
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-wealthwhiz-blue mb-2">Financial Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your financial overview for today.</p>
          </div>
          
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SummaryCard 
              title="Total Revenue" 
              value="$124,563.00" 
              change="+14.2%" 
              trend="up" 
              icon={<DollarSign className="h-5 w-5" />} 
            />
            <SummaryCard 
              title="Total Expenses" 
              value="$86,275.00" 
              change="-5.4%" 
              trend="down" 
              icon={<DollarSign className="h-5 w-5" />} 
            />
            <SummaryCard 
              title="Cash Balance" 
              value="$38,288.00" 
              change="+23.1%" 
              trend="up" 
              icon={<DollarSign className="h-5 w-5" />} 
            />
            <SummaryCard 
              title="Pending Invoices" 
              value="$15,750.00" 
              change="+2.3%" 
              trend="up" 
              icon={<DollarSign className="h-5 w-5" />} 
            />
          </div>
          
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Cash Flow Chart */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="space-y-1">
                    <CardTitle className="text-xl text-wealthwhiz-blue">Cash Flow</CardTitle>
                    <CardDescription>Income vs. Expenses (Last 6 months)</CardDescription>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">Monthly</Button>
                    <Button variant="outline" size="sm">Quarterly</Button>
                    <Button variant="outline" size="sm">Yearly</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CashFlowChart />
                </CardContent>
              </Card>
              
              {/* Budget Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-wealthwhiz-blue">Budget Overview</CardTitle>
                  <CardDescription>Current month's budget utilization</CardDescription>
                </CardHeader>
                <CardContent>
                  <BudgetOverview />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              {/* Upcoming Payments */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-wealthwhiz-blue">Upcoming Payments</CardTitle>
                  <CardDescription>Due in the next 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <UpcomingPayments />
                </CardContent>
              </Card>
              
              {/* Alerts & Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-wealthwhiz-blue">Alerts & Insights</CardTitle>
                  <CardDescription>AI-powered recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Alerts />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Login Screen Component
const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-wealthwhiz-blue to-wealthwhiz-blue-light flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Wealth<span className="text-wealthwhiz-blue-light">Whiz</span> Dashboard
          </CardTitle>
          <CardDescription>
            Log in to access your financial dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-center text-gray-500 text-sm">
              This is a demo version of the dashboard. Click the button below to access it without authentication.
            </p>
            <Button onClick={onLogin} className="w-full bg-wealthwhiz-green hover:bg-opacity-90">
              View Dashboard Demo
            </Button>
            <p className="text-center text-gray-500 text-xs">
              In a production environment, this would require proper authentication.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Summary Card Component
const SummaryCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon 
}: { 
  title: string; 
  value: string; 
  change: string; 
  trend: 'up' | 'down'; 
  icon: React.ReactNode;
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-wealthwhiz-blue-light/10 p-2 rounded-full">
            {icon}
          </div>
          {trend === 'up' ? (
            <div className="flex items-center text-green-500 text-sm font-medium">
              {change} <ArrowUpRight className="h-4 w-4 ml-1" />
            </div>
          ) : (
            <div className="flex items-center text-red-500 text-sm font-medium">
              {change} <ArrowDownRight className="h-4 w-4 ml-1" />
            </div>
          )}
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-wealthwhiz-blue">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
