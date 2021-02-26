import { render } from "@testing-library/react";
import HeaderNav from "../../src/components/HeaderNav";

describe("HeaderNav", () => {
  test("HeaderNav Renders", () => {
    const { asFragment } = render(<HeaderNav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
