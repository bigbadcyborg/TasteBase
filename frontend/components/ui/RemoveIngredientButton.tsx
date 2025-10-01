import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type Props = {
  onPress: () => void;
};

export function RemoveIngredientButton({ onPress }: Props) {
  const iconColor = useThemeColor({}, 'text');
  return (
    <TouchableOpacity
      style={[styles.addButton]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <AntDesign name="minus" size={32} color={iconColor} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
});