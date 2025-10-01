import React, { createContext, useContext, useEffect, useState } from 'react';
import { Item } from '../types/pantry';
import pantryService from '../services/pantryService';

type ContextShape = {
  items: Item[];
  loading: boolean;
  error?: string;
  refresh: () => Promise<void>;
  addItem: (amt: number, unit: string, name: string) => Promise<void>;
};

const PantryContext = createContext<ContextShape | undefined>(undefined);

export const PantryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const load = async () => {
    setLoading(true);
    setError(undefined);
    try {
      const list = await pantryService.listItems();
      setItems(list);
    } catch (e: any) {
      setError(e?.message ?? 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (amt: number, unit: string, name: string) => {
    if(!name.trim()) return;
    const created = await pantryService.addItem(amt, unit, name);
    setItems((prev) => [...prev, created]);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <PantryContext.Provider value={{ items, loading, error, refresh: load, addItem }}>
      {children}
    </PantryContext.Provider>
  );
};

export function usePantry() {
  const ctx = useContext(PantryContext);
  if (!ctx) throw new Error('usePantry must be used inside PantryProvider');
  return ctx;
}
