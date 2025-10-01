import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import Recipe from "./recipe";
import { Colors } from "../constants/theme";
import { useState, useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";

type Props = {
  recipes?: object[] | null;
};

export default function RecipeList({ recipes }: Props) {
  const [recipeList, setRecipeList] = useState<object[]>([]);
  const colorScheme = useColorScheme() || 'light';

  useEffect(() => {
    // Normalize recipes to an array (handle null/undefined)
    if (!Array.isArray(recipes)) {
      setRecipeList([]);
      return;
    }
    setRecipeList(recipes);
  }, [recipes]);

  return (
    <ThemedView style={[styles.container, { borderColor: Colors[colorScheme].tint }]}>
      {recipeList.map((recipe, index) => (
        <Recipe key={index} {...recipe} />
      ))}  
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 5,
    minHeight: 50,
    minWidth: 200,
  },
});