import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

test("renders StringCalculator component", () => {
  render(<App />);
  const heading = screen.getByText(/String Calculator/i);
  expect(heading).toBeInTheDocument();
});
