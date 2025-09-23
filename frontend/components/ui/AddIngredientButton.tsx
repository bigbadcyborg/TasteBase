import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type Props = {
  onPress: () => void;
};

export function AddIngredientBUtton({ onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.addButton]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <AntDesign name="plus" size={32} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    left: 16,
    paddingHorizontal: 32,
    paddingVertical: 32,
    borderRadius: 16,
  },
  addButtonText: { fontSize: 16, fontWeight: '600' },
});