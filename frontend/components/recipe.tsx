import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import { Colors } from "../constants/theme";
import { Recipe as RecipeType } from "../types/pantry";
import { useState, useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";

type RecipeProps = {
  recipe: RecipeType;
};

export default function Recipe({ recipe }: RecipeProps) {
  const colorScheme = useColorScheme() || 'light';

  return (
    <ThemedView style={[styles.container, { borderColor: Colors[colorScheme].tint }]}>
      <ThemedText type="subtitle">
        {recipe.title}
      </ThemedText>
      <ThemedText type="default">
        {recipe.id}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 8,
    borderBottomWidth: 5,
  },
});