export type Quantity = { amount: number; unit: string };

export type Item = {
  itemID: number;
  itemName: string;
  amount: Quantity;
};

export type Pantry = {
  pantryID: number;
  pantryName: string;
  pantryItems: Item[];
};
