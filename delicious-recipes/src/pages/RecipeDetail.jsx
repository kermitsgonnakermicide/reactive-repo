import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Loader2 } from 'lucide-react';
import PriceDisplay from '../components/PriceDisplay.jsx';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        console.log('Recipe ID:', id);
        const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=42efc48359744b818de56cd5c7947ae5`;
        console.log('API URL:', apiUrl);
        
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Response error text:', errorText);
          throw new Error(`Failed to fetch recipe: ${response.status} ${response.statusText}`);
        }
        
        const recipeData = await response.json();
        console.log('Recipe data:', recipeData);
        
        // Validate that we have the required fields
        if (!recipeData.title) {
          throw new Error('Invalid recipe data received');
        }
        
        // Map the Spoonacular data to our recipe format
        const mappedRecipe = {
          id: recipeData.id,
          title: recipeData.title,
          body: recipeData.summary ? 
            recipeData.summary.replace(/<[^>]*>/g, '').trim() || 
            `A delicious ${recipeData.title.toLowerCase()} recipe that's perfect for any occasion. This dish combines fresh ingredients with amazing flavors to create a memorable dining experience.` : 
            `A delicious ${recipeData.title.toLowerCase()} recipe that's perfect for any occasion. This dish combines fresh ingredients with amazing flavors to create a memorable dining experience.`,
          price: (recipeData.pricePerServing / 100).toFixed(2), // Convert cents to dollars
          cookTime: recipeData.readyInMinutes,
          servings: recipeData.servings,
          difficulty: ['Easy', 'Medium', 'Hard'][parseInt(recipeData.id) % 3],
          ingredients: (() => {
            // Handle different possible ingredient formats from Spoonacular
            if (recipeData.extendedIngredients && Array.isArray(recipeData.extendedIngredients)) {
              return recipeData.extendedIngredients.map(ingredient => ingredient.original || ingredient.name);
            } else if (recipeData.ingredients && Array.isArray(recipeData.ingredients)) {
              return recipeData.ingredients;
            } else {
              // Fallback ingredients
              return [
                '2 cups fresh vegetables',
                '1 lb protein of choice',
                '3 tbsp olive oil',
                '2 cloves garlic, minced',
                'Salt and pepper to taste',
                '1 cup broth or stock',
                'Fresh herbs for garnish'
              ];
            }
          })(),
          instructions: (() => {
            // Handle different possible instruction formats from Spoonacular
            if (recipeData.instructions) {
              // Remove HTML tags and split by newlines or periods
              const cleanInstructions = recipeData.instructions.replace(/<[^>]*>/g, '');
              const steps = cleanInstructions.split(/\n+|\.\s+/).filter(step => step.trim().length > 10);
              if (steps.length > 0) {
                return steps.slice(0, 8); // Limit to 8 steps
              }
            } else if (recipeData.analyzedInstructions && recipeData.analyzedInstructions.length > 0) {
              return recipeData.analyzedInstructions[0].steps.map(step => step.step);
            }
            // Fallback instructions
            return [
              'Prepare all ingredients by washing and chopping as needed.',
              'Heat olive oil in a large pan over medium-high heat.',
              'Add garlic and cook until fragrant, about 1 minute.',
              'Add protein and cook until browned on all sides.',
              'Add vegetables and cook until tender.',
              'Pour in broth and simmer for 10-15 minutes.',
              'Season with salt and pepper to taste.',
              'Garnish with fresh herbs and serve immediately.'
            ];
          })(),
          nutrition: {
            calories: 350 + (parseInt(recipeData.id) % 200),
            protein: '25g',
            carbs: '30g',
            fat: '15g'
          },
          image: recipeData.image || `https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop`
        };
        
        console.log('Mapped recipe:', mappedRecipe);
        console.log('Ingredients:', mappedRecipe.ingredients);
        console.log('Instructions:', mappedRecipe.instructions);
        
        setRecipe(mappedRecipe);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]); // Add id dependency back since we're fetching by ID

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-orange-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading recipe details...</p>
        </div>
      </div>
    );
  }

  if (error || !recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4 text-lg">Error loading recipe: {error}</p>
          <Link
            to="/recipes"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            Back to Recipes
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendDirection = () => {
    const trends = ['up', 'down', 'stable'];
    return trends[parseInt(recipe.id) % 3];
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/recipes"
            className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Recipes
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative">
                <img 
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getDifficultyColor(recipe.difficulty)}`}>
                    {recipe.difficulty}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{recipe.title}</h1>
                
                <div className="flex items-center space-x-6 mb-6 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-orange-500" />
                    <span>{recipe.cookTime} minutes</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-blue-500" />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="flex items-center">
                    <ChefHat className="h-5 w-5 mr-2 text-purple-500" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  {recipe.body}
                </p>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingredients</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
                      recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-gray-700">{ingredient}</li>
                      ))
                    ) : (
                      <li className="text-gray-700">No ingredients available</li>
                    )}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Instructions</h2>
                  <ol className="list-decimal pl-6 space-y-4">
                    {Array.isArray(recipe.instructions) && recipe.instructions.length > 0 ? (
                      recipe.instructions.map((instruction, index) => (
                        <li key={index} className="text-gray-700 leading-relaxed">{instruction}</li>
                      ))
                    ) : (
                      <li className="text-gray-700">No instructions available</li>
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <PriceDisplay price={recipe.price} trend={getTrendDirection()} />

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrition Facts</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Calories</span>
                  <span className="font-semibold text-gray-900">{recipe.nutrition.calories}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Protein</span>
                  <span className="font-semibold text-gray-900">{recipe.nutrition.protein}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Carbohydrates</span>
                  <span className="font-semibold text-gray-900">{recipe.nutrition.carbs}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Fat</span>
                  <span className="font-semibold text-gray-900">{recipe.nutrition.fat}</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recipe Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Prep all ingredients before starting to cook</li>
                <li>• Taste and adjust seasoning as needed</li>
                <li>• Store leftovers in the refrigerator for up to 3 days</li>
                <li>• Feel free to substitute ingredients based on preferences</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4"></h3>
              <p className="text-gray-600 mb-4">
              </p>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;