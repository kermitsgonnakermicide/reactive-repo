import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx';
import RecipeDetail from './pages/RecipeDetail.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;