import React from 'react';
import { Button } from 'react-native';
import { useRecipes } from '../../context/RecipeContext';
import { Recipe } from '../../types/pantry';

const AddRecipeButton: React.FC = () => {
  const { addRecipe } = useRecipes();

  const handleAddRecipe = () => {
    const recipesCache = `[
      {
        "id": 1,
        "title": "Pancakes",
        "summary": "A delicious breakfast recipe.",
        "ingredients": [],
        "instructions": "Mix and cook.",
        "servings": 4,
        "readyInMinutes": 10
      },
      {
        "id": 2,
        "title": "Spaghetti",
        "summary": "A classic pasta dish.",
        "ingredients": [],
        "instructions": "Boil and mix.",
        "servings": 4,
        "readyInMinutes": 15
      },
      {
        "id": 3,
        "title": "Salad",
        "summary": "A healthy green salad.",
        "ingredients": [],
        "instructions": "Chop and mix.",
        "servings": 2,
        "readyInMinutes": 5
      }
    ]`;

    try {
      const recipes: Recipe[] = JSON.parse(recipesCache);
      const randomIndex = Math.floor(Math.random() * recipes.length);
      const randomRecipe = recipes[randomIndex];
      addRecipe(randomRecipe);
    } catch (error) {
      console.error('Failed to parse recipes cache:', error);
    }
  };

  return <Button title="Add Random Recipe" onPress={handleAddRecipe} />;
};

export default AddRecipeButton;