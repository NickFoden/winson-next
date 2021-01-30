import { render } from "@testing-library/react";
import HeaderNav from "../../src/components/HeaderNav";

describe("HeaderNav", () => {
  test("HeaderNav Renders", () => {
    const { getByText, queryAllByText } = render(<HeaderNav />);
    expect(getByText("Win Son")).toBeTruthy();
    expect(queryAllByText("Restaurant")).toHaveLength(2);
    expect(queryAllByText("Bakery")).toHaveLength(2);
  });
});
