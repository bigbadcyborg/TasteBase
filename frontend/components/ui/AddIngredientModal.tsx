import { PropsWithChildren, useState } from 'react';
import { Modal, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (ingredient: string) => void;
};

export function AddIngredientModal({ visible, onClose, onAdd }: Props) {
  const [name, setName] = useState('');
  const bg = useThemeColor({}, 'background');
  const text = useThemeColor({}, 'text');
  const tint = useThemeColor({}, 'tint');

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={[styles.card, { backgroundColor: bg }]}>
          
          <ThemedText type="title" style={styles.title}>
            Add Ingredient
          </ThemedText>

          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="e.g., Apple"
            placeholderTextColor={text + '88'}
            style={[
              styles.input,
              { color: text, borderColor: text + '33' },
            ]}
            autoFocus
            returnKeyType="done"
            onSubmitEditing={() => onAdd(name)}
          />

          <View style={styles.row}>

            <TouchableOpacity style={styles.btn} onPress={onClose}>
              <ThemedText>Cancel</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn} onPress={() => onAdd(name)}>
              <ThemedText style={{ fontWeight: '600' }}>Add</ThemedText>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  card: {
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  title: { marginBottom: 4 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
  },
  btn: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 84,
  },
});