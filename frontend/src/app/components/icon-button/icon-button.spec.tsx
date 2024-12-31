import { render, screen } from "@testing-library/react";
import IconButton from "./icon-button";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@testing-library/jest-dom";

describe("IconButton component", () => {
  const theme = createTheme();

  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it("renders the button with MoreHorizIcon", () => {
    renderWithTheme(<IconButton />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();

    const iconElement = screen.getByTestId("MoreHorizIcon");
    expect(iconElement).toBeInTheDocument();
  });
});
