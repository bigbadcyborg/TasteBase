import { Recipe } from '../types/pantry';

let nextId = 100;
let recipes: Recipe[] = [
  // Initial recipes...
];

export const recipeService = {
  async listRecipes(): Promise<Recipe[]> {
    await new Promise((r) => setTimeout(r, 150));
    return recipes.map((r) => ({ ...r, ingredients: r.ingredients?.map(i => ({ ...i, amount: { ...i.amount } })) }));
  },

  async addRecipe(newRecipe: Recipe): Promise<void> {
    newRecipe.id = nextId++;
    recipes.push(newRecipe);
    console.log('Recipe added:', newRecipe);
  },
};

export default recipeService;