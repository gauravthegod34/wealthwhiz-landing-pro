
import React from 'react';
import { Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const UpcomingPayments = () => {
  // Sample data - in a real app, this would come from an API
  const payments = [
    { 
      id: 1, 
      title: 'Software Subscription', 
      amount: '-$599.00', 
      date: 'June 15, 2023', 
      daysLeft: 2, 
      type: 'expense',
      icon: <Calendar className="h-4 w-4" />
    },
    { 
      id: 2, 
      title: 'Client Payment', 
      amount: '+$2,450.00', 
      date: 'June 16, 2023', 
      daysLeft: 3, 
      type: 'income',
      icon: <Calendar className="h-4 w-4" />
    },
    { 
      id: 3, 
      title: 'Office Rent', 
      amount: '-$1,200.00', 
      date: 'June 18, 2023', 
      daysLeft: 5, 
      type: 'expense',
      icon: <Calendar className="h-4 w-4" />
    },
    { 
      id: 4, 
      title: 'Freelancer Payment', 
      amount: '-$850.00', 
      date: 'June 20, 2023', 
      daysLeft: 7, 
      type: 'expense',
      icon: <Calendar className="h-4 w-4" />
    },
  ];

  return (
    <div className="space-y-4">
      {payments.map(payment => (
        <div key={payment.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-3">
            <div className="bg-gray-100 p-2 rounded-full">
              {payment.icon}
            </div>
            <div>
              <p className="text-sm font-medium">{payment.title}</p>
              <p className="text-xs text-gray-500">Due: {payment.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-sm font-medium ${payment.type === 'income' ? 'text-green-500' : 'text-red-500'}`}>
              {payment.amount}
            </p>
            <p className="text-xs text-gray-500">In {payment.daysLeft} days</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingPayments;
