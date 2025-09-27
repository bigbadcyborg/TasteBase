import { StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

import { ThemedView as ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { AddIngredientButton } from '@/components/ui/AddIngredientButton';
import { AddIngredientModal } from '@/components/ui/AddIngredientModal';
import IngredientList from '@/components/ui/IngredientList';

export default function TabPantryScreen() {
  const [showAdd, setShowAdd] = useState(false);

  return (
    <ThemedView style={styles.container}>
        <AddIngredientButton onPress={() => setShowAdd(true)} />
        <AddIngredientModal
        visible={showAdd}
        onClose={() => setShowAdd(false)}
        onAdd={() => setShowAdd(false)}
        />
        <ThemedText type="title" style={styles.header}>Pantry</ThemedText>
        <ThemedText style={styles.subtitle}>All your ingredients, at a glance.</ThemedText>
        <IngredientList/>
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