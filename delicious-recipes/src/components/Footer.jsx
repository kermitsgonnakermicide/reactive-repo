import React from 'react';
import { ChefHat, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-2 rounded-xl">
                <ChefHat className="h-8 w-8 text-white" />
              </div>
              <span className="text-xl font-bold">Delicious Recipes</span>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Discover amazing recipes from around the world. From quick weeknight dinners 
              to elaborate weekend feasts, we have something for every taste and occasion.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/recipes" className="text-gray-300 hover:text-orange-400 transition-colors">All Recipes</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-400">contact info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">hello@deliciousrecipes.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">+69 4206942069</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span className="text-gray-300 text-sm">Sesame City</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © Daksh Vohra, because why tf not
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;