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
    pastries: MenuItem[];
    sandwiches: MenuItem[];
    smallBites: MenuItem[];
    soyMilk: MenuItem[];
    sparklingJuice: MenuItem[];
    tea: MenuItem[];
    wine: MenuItem[];
  };
  sys: {
    id: string;
  };
}
