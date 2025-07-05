import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, DollarSign } from 'lucide-react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative overflow-hidden">
        <img 
          src={`https://images.pexels.com/photos/${1640777 + recipe.id}/pexels-photo-${1640777 + recipe.id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop`}
          alt={recipe.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <div className="flex items-center space-x-1">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="text-sm font-semibold text-gray-800">${recipe.price}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {recipe.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {recipe.body}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-orange-500" />
              <span>{20 + (recipe.id % 40)} min</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1 text-blue-500" />
              <span>{2 + (recipe.id % 4)} servings</span>
            </div>
          </div>
        </div>
        
        <Link
          to={`/recipes/${recipe.id}`}
          className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-center py-3 px-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;