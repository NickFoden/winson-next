import { render } from "@testing-library/react";
import RestaurantMenu from "../../src/components/RestMenu";
import { MenuContent } from "../../types/menuContent";

describe("Restaurant Menu", () => {
  const mockMenuItems = {
    items: [],
    sys: {
      id: "fake",
    },
  } as MenuContent;
  test("Restaurant Menu renders the titles for each section", () => {
    const { getByText } = render(<RestaurantMenu menu={mockMenuItems} />);
    const menuTitles = [
      "food",
      "beer",
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
