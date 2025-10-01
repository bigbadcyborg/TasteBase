import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import Recipe from "./recipe";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

type Props = {
  recipes?: object[] | null;
};

export default function RecipeList({ recipes }: Props) {
  const [recipeList, setRecipeList] = useState<object[]>([]);

  useEffect(() => {
    // Normalize recipes to an array (handle null/undefined)
    if (!Array.isArray(recipes)) {
      setRecipeList([]);
      return;
    }
    setRecipeList(recipes);
  }, [recipes]);

  return (
    <ThemedView style={styles.container}>
      {recipeList.length > 0 ? (
        recipeList.map((recipe, index) => (
          <Recipe key={index} {...recipe} />
        ))  
      ) : (
        <ThemedText type="defaultSemiBold" style={{ padding: 20 }}>
          No recipes available.
        </ThemedText>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 5,
  },
});