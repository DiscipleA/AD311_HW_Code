import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import FeatureToggle from "../components/FeatureToggle";

describe("FeatureToggle Component", () => {
  // Normal cases

  it("renders feature name when enabled", () => {
    render(<FeatureToggle isEnabled={true} featureName="New Dashboard" />);
    expect(screen.getByText("New Dashboard")).toBeInTheDocument();
  });

  it("renders disabled message when feature is off", () => {
    render(<FeatureToggle isEnabled={false} featureName="Analytics" />);
    expect(screen.getByText("Feature Analytics is disabled")).toBeInTheDocument();
  });

  it("renders different enabled feature names correctly", () => {
    render(<FeatureToggle isEnabled={true} featureName="Dark Mode" />);
    expect(screen.getByText("Dark Mode")).toBeInTheDocument();
  });

  // Edge cases

  it("renders generic disabled message when feature name is an empty string", () => {
    render(<FeatureToggle isEnabled={false} featureName="" />);
    expect(screen.getByText("Feature is disabled")).toBeInTheDocument();
  });

  it("renders generic disabled message when feature name is null", () => {
    render(<FeatureToggle isEnabled={false} featureName={null} />);
    expect(screen.getByText("Feature is disabled")).toBeInTheDocument();
  });

  it("renders generic disabled message when feature name is undefined", () => {
    render(<FeatureToggle isEnabled={false} featureName={undefined} />);
    expect(screen.getByText("Feature is disabled")).toBeInTheDocument();
  });
});