import { Recipe } from '../types/pantry';

let nextId = 100;
const recipes: Recipe[] = [
  {
    id: 1,
    title: 'Pancakes',
    summary: 'Pancakes are a delicious breakfast food that can be made with a variety of ingredients. They are a staple in many households and are a great way to start the day.',
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
  },
  {
    id: 2,
    title: 'Spaghetti',
    summary: 'Spaghetti is a delicious pasta dish that can be made with a variety of ingredients. They are a staple in many households and are a great way to start the day.',
    ingredients: [
      { itemID: nextId++, itemName: 'Spaghetti', amount: { amount: 1, unit: 'lbs' } },
      { itemID: nextId++, itemName: 'Tomato Sauce', amount: { amount: 1, unit: 'lbs' } },
      { itemID: nextId++, itemName: 'Garlic', amount: { amount: 1, unit: 'lbs' } },
      { itemID: nextId++, itemName: 'Onion', amount: { amount: 1, unit: 'lbs' } },
      { itemID: nextId++, itemName: 'Chicken', amount: { amount: 1, unit: 'lbs' } },
      { itemID: nextId++, itemName: 'Salad', amount: { amount: 1, unit: 'lbs' } },
    ],
    instructions: 'In a large pot, cook the spaghetti until it is al dente. In a separate pot, cook the chicken until it is cooked through. In a separate pot, cook the salad until it is cooked through.',
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