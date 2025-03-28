
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const CashFlowChart = () => {
  // Sample data - in a real app, this would come from an API
  const data = [
    { month: 'Jan', income: 42000, expenses: 28000 },
    { month: 'Feb', income: 38000, expenses: 26000 },
    { month: 'Mar', income: 45000, expenses: 32000 },
    { month: 'Apr', income: 52000, expenses: 36000 },
    { month: 'May', income: 48000, expenses: 34000 },
    { month: 'Jun', income: 55000, expenses: 38000 },
  ];

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip 
            formatter={(value) => [`$${value.toLocaleString()}`, undefined]}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="income" 
            stackId="1" 
            stroke="#33C3F0" 
            fill="#33C3F0" 
            fillOpacity={0.6}
            name="Income"
          />
          <Area 
            type="monotone" 
            dataKey="expenses" 
            stackId="2" 
            stroke="#4CAF50" 
            fill="#4CAF50" 
            fillOpacity={0.6}
            name="Expenses"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CashFlowChart;
