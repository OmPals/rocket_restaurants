import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../../About/About";

// grouping test cases
describe("Test about component", () => {
  test("Should load a heading in about component", () => {
    render(<About />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  test("Should load a paragraph in about component", () => {
    render(<About />);
    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
