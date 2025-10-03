import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import { Colors } from "../constants/theme";
import { Recipe as RecipeType } from "../types/pantry";
import { StyleSheet, useColorScheme } from "react-native";

type RecipeProps = {
  recipe: RecipeType;
};

export default function Recipe({ recipe }: RecipeProps) {
  const colorScheme = useColorScheme() || 'light';

  return (
    <ThemedView style={[styles.container, { borderColor: Colors[colorScheme].tint }]}>
      <ThemedText type="subtitle" style={[styles.title, { borderColor: Colors[colorScheme].tint }]}>
        {recipe.title}
      </ThemedText>
      <ThemedText type="default" style={styles.summary}>{recipe.summary}</ThemedText>
      <ThemedView style={styles.row}>
        <ThemedText type="default" style={styles.rowText}>
          Serves: {recipe.servings}
        </ThemedText>
        <ThemedText type="default" style={styles.rowText}>
          Ready in: {recipe.readyInMinutes} minutes
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    minWidth: 300,
    maxWidth: 600,
  },
  title: {
    paddingHorizontal: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 8,
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
  },
  summary: {
    marginHorizontal: 5,
    marginVertical: 5,
    fontStyle: 'italic',
  },
  row: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    marginHorizontal: 5,
    fontWeight: 'bold',
  },
});