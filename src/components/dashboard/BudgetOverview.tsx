
import React from 'react';
import { Progress } from '@/components/ui/progress';

const BudgetOverview = () => {
  // Sample data - in a real app, this would come from an API
  const budgetCategories = [
    { name: 'Salaries & HR', allocated: 45000, spent: 32000, color: 'bg-blue-500' },
    { name: 'Marketing', allocated: 12000, spent: 10200, color: 'bg-purple-500' },
    { name: 'Operations', allocated: 18000, spent: 13500, color: 'bg-orange-500' },
    { name: 'Software & Tools', allocated: 8000, spent: 5000, color: 'bg-green-500' },
    { name: 'Office & Utilities', allocated: 7000, spent: 4200, color: 'bg-red-500' },
  ];

  return (
    <div className="space-y-6">
      {budgetCategories.map((category, index) => {
        const percentSpent = Math.round((category.spent / category.allocated) * 100);
        
        return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">{category.name}</p>
              <p className="text-sm text-gray-500">${category.spent.toLocaleString()} / ${category.allocated.toLocaleString()}</p>
            </div>
            <div className="space-y-1">
              <Progress value={percentSpent} className={`h-2 ${category.color}`} />
              <div className="flex justify-between text-xs text-gray-500">
                <span>{percentSpent}% used</span>
                <span>${(category.allocated - category.spent).toLocaleString()} remaining</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BudgetOverview;
