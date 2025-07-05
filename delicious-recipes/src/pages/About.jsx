import React from 'react';
import { ChefHat, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Chef Maria Rodriguez',
      role: 'Head Chef & Founder',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Michelin-starred chef with 20 years of culinary experience across 5 continents.'
    },
    {
      name: 'James Chen',
      role: 'Recipe Developer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Culinary school graduate specializing in fusion cuisine and healthy cooking.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Nutrition Expert',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Registered dietitian helping create balanced and nutritious meal plans.'
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl">
              <ChefHat className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Delicious Recipes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bringing you the world's best recipes with detailed pricing and nutrition information 
            to help you cook amazing meals on any budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2020 during the global pandemic, Delicious Recipes started as a way 
              to help people cook amazing meals at home while being mindful of their budget. 
              What began as a small collection of family recipes has grown into a comprehensive 
              platform featuring dishes from around the world.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that great food shouldn't break the bank. That's why every recipe 
              comes with detailed cost breakdowns, helping you plan meals that are both 
              delicious and budget-friendly. Our team of chefs and nutritionists work 
              tirelessly to ensure every recipe is tested, tasty, and accessible.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve millions of home cooks worldwide, helping them discover new 
              flavors and create memorable meals for their families and friends.
            </p>
          </div>
          <div>
            <img 
              src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
              alt="Cooking in kitchen" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-orange-100 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <ChefHat className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Recipes</h3>
            <p className="text-gray-600">
              Every recipe is tested by professional chefs to ensure perfect results.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Made with Love</h3>
            <p className="text-gray-600">
              We pour our passion for cooking into every recipe we share with you.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-gray-600">
              Join millions of home cooks sharing their culinary adventures.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 rounded-2xl p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Award Winning</h3>
            <p className="text-gray-600">
              Recognized as the best recipe platform for budget-conscious cooking.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-20 border border-orange-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-200"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Culinary Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're a beginner cook or a seasoned chef, we have something for everyone. 
            Start exploring our recipes today and discover your next favorite dish.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">500+</h3>
              <p className="text-gray-600">Tested Recipes</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-green-600 mb-2">2M+</h3>
              <p className="text-gray-600">Happy Cooks</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;