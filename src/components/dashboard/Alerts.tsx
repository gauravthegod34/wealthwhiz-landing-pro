
import React from 'react';
import { AlertTriangle, TrendingUp, PieChart, Bell } from 'lucide-react';

const Alerts = () => {
  // Sample data - in a real app, this would come from an API
  const alerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Cash reserves below target threshold',
      recommendation: 'Consider reducing discretionary spending',
      icon: <AlertTriangle className="h-4 w-4 text-amber-500" />
    },
    {
      id: 2,
      type: 'insight',
      message: 'Marketing ROI increased by 18%',
      recommendation: 'Consider increasing budget allocation',
      icon: <TrendingUp className="h-4 w-4 text-green-500" />
    },
    {
      id: 3,
      type: 'opportunity',
      message: 'Recurring expense optimization opportunity',
      recommendation: 'Review software subscriptions for unused services',
      icon: <PieChart className="h-4 w-4 text-blue-500" />
    },
    {
      id: 4,
      type: 'reminder',
      message: 'Quarterly tax payment due in 2 weeks',
      recommendation: 'Prepare financial documentation',
      icon: <Bell className="h-4 w-4 text-purple-500" />
    }
  ];

  return (
    <div className="space-y-4">
      {alerts.map(alert => (
        <div key={alert.id} className="p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
          <div className="flex items-start gap-3">
            <div className="mt-0.5">
              {alert.icon}
            </div>
            <div>
              <p className="text-sm font-medium">{alert.message}</p>
              <p className="text-xs text-gray-500">{alert.recommendation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alerts;
