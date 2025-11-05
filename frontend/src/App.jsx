import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home.jsx';
import CreateRecipe from './pages/CreateRecipe.jsx';
import RecipeDetail from './pages/RecipeDetail.jsx';
import EditRecipe from './pages/EditRecipe.jsx';
import AllRecipes from './pages/AllRecipes.jsx';

const App = () => {
  return (
    <div data-theme="retro">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/recipe/edit/:id" element={<EditRecipe />} />
        <Route path="/all" element={<AllRecipes />} />

      </Routes>
    </div>
  );
};

export default App;
