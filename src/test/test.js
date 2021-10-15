import { render, screen } from "@testing-library/react";
import AppRouter from "./app-router";

test("renders learn react link", () => {
  render(<AppRouter />);
  const linkElement1 = screen.getByText(/aod call log form/i);
  expect(linkElement1).toBeInTheDocument();
});
