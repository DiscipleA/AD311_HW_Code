import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../../App";

describe("App layout", () => {
  test("normal: renders Header, both Content sections, and Footer", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: /react modularity assignment/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /content a/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /content b/i })).toBeInTheDocument();
    expect(screen.getByText(/©/i)).toBeInTheDocument();
  });
});
