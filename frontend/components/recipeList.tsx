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
      {(recipeList && recipeList.length > 0) ? 
        recipeList.map((recipe, index) => (
          <Recipe key={index} {...recipe} />
        ))
      : 
      ( // Show message if recipe array is null or empty
        <ThemedView style={styles.emptyContainer}>
          <ThemedText type="subtitle" style={styles.emptyMessage}>
            No recipes found.
          </ThemedText>
          <ThemedText type="subtitle" style={styles.emptyMessage}>
            Try adjusting your search or filters.
          </ThemedText>
        </ThemedView>
      )}
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
    minWidth: 500,
  },
  emptyContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 20,
  },
  emptyMessage: {
    textAlign: 'center', 
    margin: 10,
  }
});