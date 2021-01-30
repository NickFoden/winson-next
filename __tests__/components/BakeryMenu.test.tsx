import { render } from "@testing-library/react";
import BakeryMenu from "../../src/components/BakeryMenu";
import { MenuContent } from "../../types/menuContent";

describe("Bakery Menu", () => {
  const mockMenuItems = {
    items: [],
    sys: {
      id: "fake",
    },
  } as MenuContent;
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
