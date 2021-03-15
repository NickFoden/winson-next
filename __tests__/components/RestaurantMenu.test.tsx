import { render } from "@testing-library/react";
import RestaurantMenu from "../../src/components/RestMenu";
import { DinnerMenu } from "../../types/dinnerMenu";
import { MenuItem } from "../../types/menuItem";

describe("Restaurant Menu", () => {
  const mockMenuItems = {
    fields: {
      canBottle: [] as MenuItem[],
      cocktails: [] as MenuItem[],
      drafts: [] as MenuItem[],
      grocery: [] as MenuItem[],
      largePlates: [] as MenuItem[],
      nonAlcoholic: [] as MenuItem[],
      smallPlates: [] as MenuItem[],
      wine: [] as MenuItem[],
    },
    sys: {
      id: "123",
    },
  } as DinnerMenu;
  test("Restaurant Menu renders the titles for each section", () => {
    const { getByText } = render(<RestaurantMenu menu={mockMenuItems} />);
    const menuTitles = [
      "small plates",
      "large plates",
      "can & bottle",
      "drafts",
      "grocery",
      "cocktails",
      "non-alcoholic",
      "wine",
    ];
    for (const menuTitle of menuTitles) {
      expect(getByText(menuTitle)).toBeTruthy();
    }
  });
});
