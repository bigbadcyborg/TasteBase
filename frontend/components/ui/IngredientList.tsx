import { ThemedView } from "../themed-view";
import { ThemedText } from "../themed-text";
import { StyleSheet, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { usePantry } from '../../context/PantryContext';

export default function IngredientList() {
  const { items, loading, error } = usePantry();

  if (loading) return <ActivityIndicator />;

  if (error) return (
    <ThemedView style={styles.container}>
      <ThemedText type="default">{error}</ThemedText>
    </ThemedView>
  );

  return (
    <ThemedView style={styles.container}>
      {items.map((item) => (
        <View key={item.itemID} style={styles.row}>
          <View>
            <ThemedText type="default" style={{ fontSize: 16 }}>{item.itemName}</ThemedText>
            <ThemedText type="subtitle">{item.amount.amount} {item.amount.unit}</ThemedText>
          </View>
        </View>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee'
  }
});