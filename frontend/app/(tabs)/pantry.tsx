import { StyleSheet } from 'react-native';

import { ThemedView as ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';

export default function TabPantryScreen() {
  return (
    <ThemedView style={styles.container}>
      // Tab content
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});