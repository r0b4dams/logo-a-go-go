import { Shape, Circle } from "..";

describe("Circle", () => {
  it("extends the Shape class", () => {
    const CIRCLE_COLOR = "chartreuse";
    const circle = new Circle(CIRCLE_COLOR);

    expect(circle instanceof Shape).toBe(true);
  });
});

// TODO: check instantiation with given color
// TODO: check render method returns expected string
