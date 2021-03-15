export interface MenuItem {
  fields: {
    canBeGlutenFree: boolean;
    canBeVegan: boolean;
    canBeVegetarian: boolean;
    category: { sys: { id: string } };
    glutenFree: boolean;
    name: string;
    optionalDescription: string;
    price: number;
    priceHigh: number;
  };
  sys: { id: string };
}
