import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import { Colors } from "../constants/theme";
import { useState, useEffect } from "react";
import { StyleSheet, useColorScheme } from "react-native";

export default function Recipe(jsonData: object) {
  const [title, setTitle] = useState("Recipe Title");
  const [json] = useState({});
  const colorScheme = useColorScheme() || 'light';

  useEffect(() => {
    // Parse JSON data and set title and other states
    // Example: setTitle(jsonData.title);
  }, [jsonData]);

  return (
    <ThemedView style={[styles.container, { borderColor: Colors[colorScheme].tint }]}>
      <ThemedText type="subtitle">{title}</ThemedText>
      {/* Render other recipe details here */}
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