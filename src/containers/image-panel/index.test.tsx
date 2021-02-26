import { dogImages } from "../../utils/mocks";
import React from "react";
import { render, screen } from "@testing-library/react";

import { ImagePanel } from ".";

test("Verifies that initially, we display 20 images", () => {
  render(<ImagePanel dogImages={dogImages} selectedDog="Foo" />);

  const numberOfImages = screen.getAllByTestId("image").length;

  expect(numberOfImages).toBe(20);
});

test("Verifies that after clicking the button, we show 40 images", () => {
  render(<ImagePanel dogImages={dogImages} selectedDog="Foo" />);
  screen.getByTestId("expandButton").click();

  const numberOfImages = screen.getAllByTestId("image").length;

  expect(numberOfImages).toBe(40);
});

test("Verifies that after updating the props, we only display 20 images", () => {
  const { rerender } = render(
    <ImagePanel dogImages={dogImages} selectedDog="Foo" />
  );

  screen.getByTestId("expandButton").click();

  rerender(<ImagePanel dogImages={dogImages} selectedDog="Foo2" />);

  const numberOfImages = screen.getAllByTestId("image").length;

  expect(numberOfImages).toBe(20);
});

test("Verifies that the expand button is not showed when we have less than 20 elements", () => {
  render(
    <ImagePanel
      dogImages={dogImages.filter((_, index) => index < 10)}
      selectedDog="Foo"
    />
  );

  expect(screen.queryByTestId("expandButton")).toBeNull();
});
