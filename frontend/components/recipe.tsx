import { ThemedView } from "./themed-view";
import { ThemedText } from "./themed-text";
import { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

export default function Recipe(jsonData: object) {
  const [title, setTitle] = useState("Recipe Title");
  const [json] = useState({});

  useEffect(() => {
    // Parse JSON data and set title and other states
    // Example: setTitle(jsonData.title);
  }, [jsonData]);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">{title}</ThemedText>
      {/* Render other recipe details here */}
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