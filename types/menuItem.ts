export interface MenuItem {
  fields: {
    category: { sys: { id: string } };
    name: string;
    optionalDescription: string;
    optionalAddOn?: string;
    optionalAddOnPrice?: number;
    price: number;
    priceHigh: number;
  };
  sys: { id: string };
}
