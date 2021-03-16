import { MenuItem } from "./menuItem";

export interface MenuBrunch {
  fields: {
    baiju: MenuItem[];
    canBottle: MenuItem[];
    cocktails: MenuItem[];
    dessert: MenuItem[];
    drafts: MenuItem[];
    grocery: MenuItem[];
    largePlates: MenuItem[];
    nonAlcoholic: MenuItem[];
    sides: MenuItem[];
    smallPlates: MenuItem[];
    wine: MenuItem[];
  };
  sys: {
    id: string;
  };
}
