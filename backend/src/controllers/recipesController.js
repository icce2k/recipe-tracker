import Recipe from '../models/Recipe.js';

// Recipe controller handles incoming requests, processes them, and
// sends back responses to the client.
export async function getRecipes(req, res) {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error in getRecipes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export async function getRecipeById(req, res) {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (error) {
    console.error("Error in getRecipeById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export async function createRecipe(req, res) {
  try {
    const { title, ingredients, steps } = req.body;
    const recipe = new Recipe({ title, ingredients, steps });
    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error("Error in createRecipe controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export async function updateRecipe(req, res) {
  try {
    const { title, ingredients, steps } = req.body;
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, { title, ingredients, steps }, { new: true });
    if (!updatedRecipe) return res.status(404).json({ message: "Recipe note found" });
    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error("Error in updatedRecipe controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export async function deleteRecipe(req, res) {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(deletedRecipe);
  } catch (error) {
    console.error("Error in deleteRecipe controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};