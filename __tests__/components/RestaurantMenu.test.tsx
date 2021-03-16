import { render } from "@testing-library/react";
import RestaurantMenu from "../../src/components/RestMenu";
import { DinnerMenu } from "../../types/dinnerMenu";
import { MenuItem } from "../../types/menuItem";

describe("Restaurant Menu", () => {
  const mockMenuItems = {
    fields: {
      baiju: [] as MenuItem[],
      canBottle: [] as MenuItem[],
      cocktails: [] as MenuItem[],
      dessert: [] as MenuItem[],
      drafts: [] as MenuItem[],
      grocery: [] as MenuItem[],
      largePlates: [] as MenuItem[],
      nonAlcoholic: [] as MenuItem[],
      sides: [] as MenuItem[],
      smallPlates: [] as MenuItem[],
      whiskey: [] as MenuItem[],
      wine: [] as MenuItem[],
    },
    sys: {
      id: "123",
    },
  } as DinnerMenu;
  test("Restaurant Menu renders the titles for each section", () => {
    const { getByText } = render(<RestaurantMenu menu={mockMenuItems} />);
    const menuTitles = [
      "baiju",
      "small plates",
      "large plates",
      "can & bottle",
      "dessert",
      "drafts",
      "grocery",
      "cocktails",
      "non-alcoholic",
      "sides",
      "whiskey",
      "wine",
    ];
    for (const menuTitle of menuTitles) {
      expect(getByText(menuTitle)).toBeTruthy();
    }
  });
});
