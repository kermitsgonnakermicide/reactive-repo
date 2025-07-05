import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Clock, Users, Star } from 'lucide-react';

const Home = () => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Mediterranean Pasta Salad",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      time: "25 min",
      servings: 4,
      rating: 4.8
    },
    {
      id: 2,
      title: "Grilled Salmon with Herbs",
      image: "https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      time: "30 min",
      servings: 2,
      rating: 4.9
    },
    {
      id: 3,
      title: "Chocolate Lava Cake",
      image: "https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      time: "45 min",
      servings: 6,
      rating: 4.7
    }
  ];

  const backgroundPattern = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    opacity: 0.3
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-red-500 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0" style={backgroundPattern}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                <ChefHat className="h-16 w-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              discover amazing
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                recipes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/recipes"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
              >
                Browse Recipes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/home"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">100+ Recipes</h3>
                <p className="text-orange-100">curated from cuisines around the world! from italian to pan-asian, we've got it all!!</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">quick and easy!!</h3>
                <p className="text-orange-100">under 60 minutes for your lazy ahh</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">top rated</h3>
                <p className="text-orange-100">the people love them!!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Recipes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              some of the people's favourite recipes!!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold text-gray-800">{recipe.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {recipe.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-orange-500" />
                      <span>{recipe.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-blue-500" />
                      <span>{recipe.servings} servings</span>
                    </div>
                  </div>
                  
                  <Link
                    to={`/recipes/${recipe.id}`}
                    className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-center py-3 px-4 rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                  >
                    view recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/recipes"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              view all recipes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;