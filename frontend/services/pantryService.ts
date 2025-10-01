import { Item, Pantry } from '../types/pantry';

let nextId = 100;
const pantry: Pantry = {
  pantryID: 1,
  pantryName: 'Main Pantry',
  pantryItems: [
    // { itemID: nextId++, itemName: 'Flour', amount: { amount: 1, unit: 'kg' } },
    // { itemID: nextId++, itemName: 'Salt', amount: { amount: 0.5, unit: 'kg' } },
  ],
};



export const pantryService = {
  async listItems(): Promise<Item[]> {
    await new Promise((r) => setTimeout(r, 150));
    return pantry.pantryItems.map((i) => ({ ...i, amount: { ...i.amount } }));
  },
  async addItem(amt: number, unit: string, name: string): Promise<Item> {
    await new Promise((r) => setTimeout(r, 150));

    const keyName = name.trim().toLowerCase().replace(/\s+/g, ' ');
    const keyUnit = unit.trim().toLowerCase().replace(/\s+/g, ' ');

    const existing = pantry.pantryItems.find(
      i => i.itemName.trim().toLowerCase().replace(/\s+/g, ' ') === keyName 
      && i.amount.unit.trim().toLowerCase().replace(/\s+/g, ' ') === keyUnit
    );

    if (existing) {
      existing.amount.amount += amt;
      return { ...existing, amount: { ...existing.amount } };
    }

    const newItem: Item = {
      itemID: nextId++,
      itemName: name,
      amount: { amount: amt, unit: unit },
    };
    pantry.pantryItems.push(newItem);
    return { ...newItem, amount: { ...newItem.amount } };
  },
};




export default pantryService;
