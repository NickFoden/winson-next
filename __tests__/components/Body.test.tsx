import { render } from "@testing-library/react";
import Body from "../../src/components/Body";

const FakeComponent = () => (
  <div>
    <p>Stranger Things</p>
  </div>
);

describe("Body Layout", () => {
  test("Body Layout renders children", () => {
    const { getByText, queryAllByText } = render(
      <Body>
        <FakeComponent />{" "}
      </Body>
    );
    expect(getByText("Stranger Things")).toBeTruthy();
  });
});
