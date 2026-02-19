import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ContentA } from "../ContentA";
import { ContentB } from "../ContentB";

describe("Content components", () => {
  test("normal: ContentA renders heading and button", () => {
    render(<ContentA />);
    expect(screen.getByRole("heading", { name: /content a/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /click a/i })).toBeInTheDocument();
  });

  test("normal: ContentB renders heading and button", () => {
    render(<ContentB />);
    expect(screen.getByRole("heading", { name: /content b/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /click b/i })).toBeInTheDocument();
  });
});
