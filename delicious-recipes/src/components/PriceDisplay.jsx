import React from 'react';
import { DollarSign, TrendingUp, TrendingDown } from 'lucide-react';

const PriceDisplay = ({ price, trend }) => {
  const getTrendIcon = () => {
    if (trend === 'up') return <TrendingUp className="h-4 w-4 text-red-500" />;
    if (trend === 'down') return <TrendingDown className="h-4 w-4 text-green-500" />;
    return null;
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-red-500';
    if (trend === 'down') return 'text-green-500';
    return 'text-gray-500';
  };

  return (
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-green-100 p-2 rounded-lg">
            <DollarSign className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Estimated Cost</p>
            <p className="text-2xl font-bold text-gray-900">${price}</p>
          </div>
        </div>
        <div className={`flex items-center space-x-1 ${getTrendColor()}`}>
          {getTrendIcon()}
          <span className="text-sm font-medium">
            {trend === 'up' ? '+5%' : trend === 'down' ? '-3%' : 'Stable'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceDisplay;