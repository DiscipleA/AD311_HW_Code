import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../SharedComponents";

describe("Button", () => {
  test("normal: renders the provided label", () => {
    render(<Button label="Press Here" onClick={() => {}} />);
    expect(screen.getByRole("button", { name: "Press Here" })).toBeInTheDocument();
  });

  test("normal: calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button label="Click" onClick={handleClick} />);
    await user.click(screen.getByRole("button", { name: "Click" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("edge: uses default label when label is not provided", () => {
    render(<Button onClick={() => {}} />);
    expect(screen.getByRole("button", { name: "Click Me" })).toBeInTheDocument();
  });

  test("edge: does not throw if onClick is missing", async () => {
    const user = userEvent.setup();

    render(<Button label="No Handler" />);
    await user.click(screen.getByRole("button", { name: "No Handler" }));

    // If it threw, the test would fail. This assertion is just a sanity check:
    expect(screen.getByRole("button", { name: "No Handler" })).toBeInTheDocument();
  });

  test("edge: supports an empty string label", () => {
    render(<Button label="" onClick={() => {}} />);
    // When label is "", accessible name is empty; just confirm a button exists.
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
