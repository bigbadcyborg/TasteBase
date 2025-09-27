import { ThemedView } from "../themed-view";
import { ThemedText } from "../themed-text";
import { StyleSheet, ActivityIndicator, useColorScheme } from "react-native";
import { usePantry } from '../../context/PantryContext';
import { Colors } from "../../constants/theme";

export default function IngredientList() {
  const { items, loading, error } = usePantry(); // Pantry object from PantryContext
  const colorScheme = useColorScheme() || 'light';

  if (loading) return <ActivityIndicator />;

  if (error) return (
    <ThemedView style={styles.container}>
      <ThemedText type="default">{error}</ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={[styles.container, { borderColor: Colors[colorScheme].tint }]}>
      <ThemedView style={[styles.header, { borderColor: Colors[colorScheme].tint }]}>
        <ThemedText type="subtitle" style={[{ fontStyle: 'italic' }]}>Item</ThemedText>
        <ThemedText type="default" style={[{ fontStyle: 'italic' }]}>Amount</ThemedText>
      </ThemedView>
      {items.map((item) => (
        <ThemedView key={item.itemID} style={[styles.row, { borderColor: Colors[colorScheme].tint }]}>
          <ThemedText type="subtitle">{item.itemName}</ThemedText>
          <ThemedText type="default">{item.amount.amount} {item.amount.unit}</ThemedText>
        </ThemedView>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderStyle: 'solid',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
  }
});