import React, { createContext, useContext, useEffect, useState } from 'react';
import { Recipe } from '../types/pantry';
import recipeService from '../services/recipeService';

type ContextShape = {
  recipes: object[];
  loading: boolean;
  error?: string;
  refresh: () => Promise<void>;
};

const RecipeContext = createContext<ContextShape | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const load = async () => {
    setLoading(true);
    setError(undefined);

    try {
      const list = await recipeService.listRecipes();
      setRecipes(list);
    } catch (e: any) {
      setError(e?.message ?? 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, loading, error, refresh: load }}>
      {children}
    </RecipeContext.Provider>
  );
}

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
}