import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NestedButtons from "../components/NestedButtons";

describe("NestedButtons component", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  // -----------------------------
  // Normal test cases
  // -----------------------------

  it("renders the outer container heading and inner button", () => {
    render(<NestedButtons />);

    expect(screen.getByText("Outer Container")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Inner Button" })
    ).toBeInTheDocument();
  });

  it("fires only the outer handler when the outer container is clicked", async () => {
    const user = userEvent.setup();
    render(<NestedButtons />);

    const outerContainer = screen.getByLabelText("Outer Container");

    await user.click(outerContainer);

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Outer container clicked");

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Outer container clicked");
  });

  it("fires only the inner handler when the inner button is clicked", async () => {
    const user = userEvent.setup();
    render(<NestedButtons />);

    const innerButton = screen.getByRole("button", { name: "Inner Button" });

    await user.click(innerButton);

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Inner button clicked");

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Inner button clicked");
  });

  // -----------------------------
  // Edge test cases
  // -----------------------------

  it("does not bubble to the outer container when the inner button is clicked multiple times", async () => {
    const user = userEvent.setup();
    render(<NestedButtons />);

    const innerButton = screen.getByRole("button", { name: "Inner Button" });

    await user.click(innerButton);
    await user.click(innerButton);
    await user.click(innerButton);

    expect(window.alert).toHaveBeenCalledTimes(3);
    expect(console.log).toHaveBeenCalledTimes(3);

    expect(window.alert).toHaveBeenNthCalledWith(1, "Inner button clicked");
    expect(window.alert).toHaveBeenNthCalledWith(2, "Inner button clicked");
    expect(window.alert).toHaveBeenNthCalledWith(3, "Inner button clicked");
  });

  it("keeps outer and inner click behavior isolated across sequential clicks", async () => {
    const user = userEvent.setup();
    render(<NestedButtons />);

    const outerContainer = screen.getByLabelText("Outer Container");
    const innerButton = screen.getByRole("button", { name: "Inner Button" });

    await user.click(outerContainer);
    await user.click(innerButton);

    expect(window.alert).toHaveBeenCalledTimes(2);
    expect(window.alert).toHaveBeenNthCalledWith(1, "Outer container clicked");
    expect(window.alert).toHaveBeenNthCalledWith(2, "Inner button clicked");

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenNthCalledWith(1, "Outer container clicked");
    expect(console.log).toHaveBeenNthCalledWith(2, "Inner button clicked");
  });

  it("still prevents propagation when using fireEvent directly on the inner button", () => {
    render(<NestedButtons />);

    const innerButton = screen.getByRole("button", { name: "Inner Button" });

    fireEvent.click(innerButton);

    expect(window.alert).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledWith("Inner button clicked");

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("Inner button clicked");
  });
});