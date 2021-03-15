import { MenuItem } from "./menuItem";

export interface MenuBakery {
  fields: {
    beer: MenuItem[];
    burgersAndSandos: MenuItem[];
    canBottle: MenuItem[];
    cocktails: MenuItem[];
    cafe: MenuItem[];
    friedChicken: MenuItem[];
    largePlates: MenuItem[];
    nonAlcoholic: MenuItem[];
    pastries: MenuItem[];
    sandwiches: MenuItem[];
    smallBites: MenuItem[];
    soyMilk: MenuItem[];
    tea: MenuItem[];
    wine: MenuItem[];
  };
  sys: {
    id: string;
  };
}
