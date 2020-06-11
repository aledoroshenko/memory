import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders page with app", () => {
  const { getByTestId } = render(<App />);
  // const boardElement = getByTestId("board");
  // const cardElement = getByTestId("card");
  // expect(boardElement).toBeInTheDocument();
  // expect(cardElement).toBeInTheDocument();
});
