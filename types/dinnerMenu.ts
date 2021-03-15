import { MenuItem } from "./menuItem";

export interface DinnerMenu {
  fields: {
    canBottle: MenuItem[];
    cocktails: MenuItem[];
    drafts: MenuItem[];
    grocery: MenuItem[];
    largePlates: MenuItem[];
    nonAlcoholic: MenuItem[];
    smallPlates: MenuItem[];
    wine: MenuItem[];
  };
  sys: {
    id: string;
  };
}
