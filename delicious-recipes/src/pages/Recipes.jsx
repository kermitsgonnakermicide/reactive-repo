import React, { useState, useEffect } from 'react';
import RecipeCard from '../components/RecipeCard.jsx';
import { Loader2, Search } from 'lucide-react';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/random?limitLicense=true&number=20&apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        
        // Check if we have recipes in the response
        if (!data.recipes || data.recipes.length === 0) {
          throw new Error('No recipes found');
        }
        
        // Transform Spoonacular recipes into our format
        const recipesWithPrices = data.recipes.map(recipe => ({
          id: recipe.id,
          title: recipe.title,
          body: recipe.summary ? 
            recipe.summary.replace(/<[^>]*>/g, '').trim() || 
            `A delicious ${recipe.title.toLowerCase()} recipe that's perfect for any occasion.` : 
            `A delicious ${recipe.title.toLowerCase()} recipe that's perfect for any occasion.`,
          price: (recipe.pricePerServing / 100).toFixed(2), // Convert cents to dollars
          cookTime: recipe.readyInMinutes,
          servings: recipe.servings,
          image: recipe.image || `https://images.pexels.com/photos/${1640777 + recipe.id}/pexels-photo-${1640777 + recipe.id}.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop`
        }));
        
        setRecipes(recipesWithPrices);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-orange-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading delicious recipes...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4 text-lg">Error loading recipes: {error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );  
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            All Recipes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our complete collection of recipes with detailed pricing information. 
            Find the perfect dish for any budget and occasion.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {filteredRecipes.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No recipes found matching "{searchTerm}"</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}

        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Recipe Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">Quick Meals</h3>
                <p className="text-sm text-gray-600">Under 30 minutes</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">Budget Friendly</h3>
                <p className="text-sm text-gray-600">Under $15</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">Healthy Options</h3>
                <p className="text-sm text-gray-600">Nutritious & delicious</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-gray-900">Special Occasions</h3>
                <p className="text-sm text-gray-600">Impressive dishes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;