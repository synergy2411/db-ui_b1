import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("<Async /> Component", () => {
  test("renders list of todos from REST API Call", async () => {
    render(<Async />);

    const listItemsCollection = await screen.findAllByRole("listitem");

    expect(listItemsCollection.length).toEqual(200);
  });
});
