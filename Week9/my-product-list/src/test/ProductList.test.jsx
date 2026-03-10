import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductList from "../ProductList";

describe("ProductList component", () => {
  const normalProducts = [
    {
      id: 1,
      name: "Laptop",
      description: "High-performance laptop for professionals.",
      price: 1200,
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest generation smartphone with advanced features.",
      price: 800,
    },
    {
      id: 3,
      name: "Headphones",
      description: "Noise-cancelling over-ear headphones.",
      price: 200,
    },
  ];

  test("renders the product list title", () => {
    render(<ProductList products={normalProducts} />);
    expect(screen.getByText("Product List")).toBeInTheDocument();
  });

  test("renders all product names for normal data", () => {
    render(<ProductList products={normalProducts} />);
    expect(screen.getByText("Laptop")).toBeInTheDocument();
    expect(screen.getByText("Smartphone")).toBeInTheDocument();
    expect(screen.getByText("Headphones")).toBeInTheDocument();
  });

  test("renders all product prices for normal data", () => {
    render(<ProductList products={normalProducts} />);
    expect(screen.getByText("$1200")).toBeInTheDocument();
    expect(screen.getByText("$800")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
  });

  test("renders empty state when products array is empty", () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText("No products available.")).toBeInTheDocument();
  });

  test("renders fallback text when description is missing", () => {
    const edgeCaseProducts = [
      {
        id: 1,
        name: "Tablet",
        price: 500,
      },
    ];

    render(<ProductList products={edgeCaseProducts} />);
    expect(screen.getByText("No description available.")).toBeInTheDocument();
  });

  test("renders fallback text when price is invalid", () => {
    const edgeCaseProducts = [
      {
        id: 1,
        name: "Camera",
        description: "DSLR camera",
        price: "unknown",
      },
    ];

    render(<ProductList products={edgeCaseProducts} />);
    expect(screen.getByText("Price unavailable")).toBeInTheDocument();
  });

  test("renders fallback text when name is missing", () => {
    const edgeCaseProducts = [
      {
        id: 1,
        description: "Mystery product",
        price: 50,
      },
    ];

    render(<ProductList products={edgeCaseProducts} />);
    expect(screen.getByText("Unnamed Product")).toBeInTheDocument();
  });
});