import { render } from "@testing-library/react";
import BakeryMenu from "../../src/components/BakeryMenu";
import { MenuBakery } from "../../types/bakeryMenu";
import { MenuItem } from "../../types/menuItem";

describe("Bakery Menu", () => {
  const mockMenuItems = {
    fields: {
      beer: [] as MenuItem[],
      burgersAndSandos: [] as MenuItem[],
      cafe: [] as MenuItem[],
      cocktails: [] as MenuItem[],
      friedChicken: [] as MenuItem[],
      pastries: [] as MenuItem[],
      sandwiches: [] as MenuItem[],
      smallBites: [] as MenuItem[],
      soyMilk: [] as MenuItem[],
      sparklingJuice: [] as MenuItem[],
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
      "soy milk (9 am - 1 pm)",
      "sparkling + juice",
      "beer",
      "wine",
      "gāodiǎn (pastries)",
      "sānmíngzhì (sandwiches)",
      "burgers + sandos",
      "xiǎochí + sālā",
      "fried chicken",
    ];
    for (const menuTitle of menuTitles) {
      expect(getByText(menuTitle)).toBeTruthy();
    }
  });
});
