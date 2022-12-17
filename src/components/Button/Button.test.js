import React from "react";
import { render } from "@testing-library/react";
import Button from ".";

it("renders an abled, contained, primary (default) button correctly", () => {
  const { asFragment } = render(<Button text="Button" />);

  expect(asFragment()).toMatchSnapshot();
});

it("renders a disabled button correctly", () => {
  const { asFragment } = render(<Button disabled text="Button" />);

  expect(asFragment()).toMatchSnapshot();
});

it("renders an outlined button correctly", () => {
  const { asFragment } = render(<Button text="Button" variant="outlined" />);

  expect(asFragment()).toMatchSnapshot();
});

it("renders a secondary button correctly", () => {
  const { asFragment } = render(<Button color="secondary" text="Button" />);

  expect(asFragment()).toMatchSnapshot();
});
