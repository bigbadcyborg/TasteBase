import { Item, Recipe } from '../types/pantry';

let nextId = 100;
const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Pancakes',
    ingredients: [
      { itemID: nextId++, itemName: 'Flour', amount: { amount: 2, unit: 'cups' } },
      { itemID: nextId++, itemName: 'Milk', amount: { amount: 1.5, unit: 'cups' } },
      { itemID: nextId++, itemName: 'Egg', amount: { amount: 1, unit: 'large' } },
      { itemID: nextId++, itemName: 'Sugar', amount: { amount: 2, unit: 'tbsp' } },
      { itemID: nextId++, itemName: 'Baking Powder', amount: { amount: 2, unit: 'tsp' } },
      { itemID: nextId++, itemName: 'Salt', amount: { amount: 0.5, unit: 'tsp' } },
    ],
    instructions:
      'In a large bowl, whisk together the flour, sugar, baking powder, and salt. In another bowl, beat the egg and then whisk in the milk. Pour the wet ingredients into the dry ingredients and stir until just combined. Heat a non-stick skillet over medium heat and lightly grease it. Pour 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown on the other side. Serve warm with your favorite toppings.'
    ,
    servings: 4,
    readyInMinutes: 10,
  }
];


export const recipeService = {
  async listRecipes(): Promise<Recipe[]> {
    await new Promise((r) => setTimeout(r, 150));
    return recipes.map((r) => ({ ...r, ingredients: r.ingredients?.map(i => ({ ...i, amount: { ...i.amount } })) }));
  },
};

export default recipeService;