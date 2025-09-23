import { StyleSheet } from 'react-native';

import { ThemedView as ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { AddIngredientButton } from '@/components/ui/AddIngredientButton';

export default function TabPantryScreen() {
  return (
    <ThemedView style={styles.container}>
        <AddIngredientButton onPress={() => {}} />
        <ThemedText type="title" style={styles.header}>Pantry</ThemedText>
        <ThemedText style={styles.subtitle}>All your ingredients, at a glance.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 20,
    textAlign: 'center',
  },
  subtitle: {
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});