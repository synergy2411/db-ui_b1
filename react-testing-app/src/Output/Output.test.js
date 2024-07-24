import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Output from "./Output";

test("renders h1 element on the document", () => {
  render(<Output />);

  const headingEl = screen.getByText("The output COMPONENT", { exact: false });

  expect(headingEl).toBeInTheDocument();
});

test("renders paragraph element in the document", () => {
  render(<Output />);

  const paragraphEl = screen.queryByText("Demo content is available", {
    exact: false,
  });

  expect(paragraphEl).not.toBeNull();
});

test("renders not 'something not useful' in the document", () => {
  render(<Output />);

  const element = screen.queryByText("something not useful");

  expect(element).toBeNull();
});

test("renders 'Toggle is false' when initially render the component", () => {
  render(<Output />);

  const paragraphEl = screen.getByText(/Toggle is false/i);

  expect(paragraphEl).toBeInTheDocument();
});

test("renders 'Toggle is true' when the button is clicked", async () => {
  render(<Output />);

  const buttonEl = screen.getByRole("button");

  userEvent.click(buttonEl);

  const paragraphEl = await screen.findByText(/Toggle is true/i);

  expect(paragraphEl).not.toBeNull();
});

test("renders not 'Toggle is false' when the button is clicked", () => {
  render(<Output />);

  const buttonEl = screen.getByRole("button");

  fireEvent.click(buttonEl);

  const paragraphEl = screen.queryByText(/Toggle is false/i);

  expect(paragraphEl).not.toBeInTheDocument();
});
