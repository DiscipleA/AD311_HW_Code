import { describe, test, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import RecipeGallery from "../src/components/RecipeGallery";
import { recipes } from "../src/data/recipes";

describe("RecipeGallery", () => {
  // -------------------------
  // Normal case tests
  // -------------------------

  test("renders the main gallery heading", () => {
    render(<RecipeGallery />);

    expect(
      screen.getByRole("heading", { name: /recipe gallery/i })
    ).toBeInTheDocument();
  });

  test("renders one recipe card for each recipe in the data array", () => {
    render(<RecipeGallery />);

    const recipeTitles = recipes.map((recipe) => recipe.title);

    recipeTitles.forEach((title) => {
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    });
  });

  test("renders images with the correct alt text for each recipe", () => {
    render(<RecipeGallery />);

    recipes.forEach((recipe) => {
      const image = screen.getByAltText(recipe.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", recipe.image);
    });
  });

  // -------------------------
  // Edge case tests
  // -------------------------

  test("renders the correct number of ingredient list items across all recipes", () => {
    render(<RecipeGallery />);

    const totalIngredients = recipes.reduce(
      (count, recipe) => count + recipe.ingredients.length,
      0
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(totalIngredients);
  });

  test("each recipe card contains an Ingredients heading", () => {
    render(<RecipeGallery />);

    const recipeArticles = screen.getAllByRole("article");

    recipeArticles.forEach((article) => {
      expect(
        within(article).getByRole("heading", { name: /ingredients/i })
      ).toBeInTheDocument();
    });
  });

  test("renders recipe titles exactly as provided in the static data", () => {
    render(<RecipeGallery />);

    recipes.forEach((recipe) => {
      expect(screen.getByText(recipe.title)).toHaveTextContent(recipe.title);
    });
  });
});