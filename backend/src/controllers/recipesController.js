import Recipe from '../models/Recipe.js';

// Recipe controller handles incoming requests, processes them, and
// sends back responses to the client.
export async function getRecipes(req, res) {
  res.status(200).send("Recipe fetched.");
};

export async function getRecipeById(req, res) {
  res.status(200).send("Recipe fetched.");
};

export async function createRecipe(req, res) {
  res.status(201).send("Recipe created.");
};

export async function updateRecipe(req, res) {
  res.status(200).send("Recipe updated.");
};

export async function deleteRecipe(req, res) {
  res.status(200).send("Recipe deleted.");
};