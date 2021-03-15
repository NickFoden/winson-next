import { render } from "@testing-library/react";
import BakeryMenu from "../../src/components/BakeryMenu";
import { MenuBakery } from "../../types/bakeryMenu";
import { MenuItem } from "../../types/menuItem";

describe("Bakery Menu", () => {
  const mockMenuItems = {
    fields: {
      beer: [] as MenuItem[],
      burgersAndSandos: [] as MenuItem[],
      canBottle: [] as MenuItem[],
      cocktails: [] as MenuItem[],
      cafe: [] as MenuItem[],
      friedChicken: [] as MenuItem[],
      largePlates: [] as MenuItem[],
      nonAlcoholic: [] as MenuItem[],
      pastries: [] as MenuItem[],
      sandwiches: [] as MenuItem[],
      smallBites: [] as MenuItem[],
      soyMilk: [] as MenuItem[],
      tea: [] as MenuItem[],
      wine: [] as MenuItem[],
    },
    sys: {
      id: "fake",
    },
  } as MenuBakery;
  test("Bakery Menu renders the titles for each section", () => {
    const { getByText } = render(<BakeryMenu menu={mockMenuItems} />);
    const menuTitles = [
      "café",
      "tea",
      "soy milk",
      "non-alcoholic",
      "beer",
      "wine",
      "gāodiǎn (pastries)",
      "sānmíngzhì (sandwiches)",
      "burgers and sandos",
      "xiǎochí (small bites) + sālā (salad)",
      "fried chicken",
    ];
    for (const menuTitle of menuTitles) {
      expect(getByText(menuTitle)).toBeTruthy();
    }
  });
});
