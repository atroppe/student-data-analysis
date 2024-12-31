import SmallButton from "./small-button";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import "@testing-library/jest-dom";

describe("SmallButton component", () => {
  const theme = createTheme();

  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it("renders the button with the correct text", () => {
    renderWithTheme(<SmallButton text="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("button is clickable and calls onClickOutput", () => {
    const handleClick = vi.fn();
    renderWithTheme(
      <SmallButton text="Click Me" onClickOutput={handleClick} />
    );

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("button is disabled when isDisabled prop is true", () => {
    renderWithTheme(<SmallButton text="Click Me" isDisabled />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeDisabled();
  });

  it("button renders with an icon and variant", () => {
    renderWithTheme(
      <SmallButton text="Add Item" icon={<AddIcon />} variant="contained" />
    );

    const buttonElement = screen.getByText(/add item/i);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("MuiButton-contained");
    expect(screen.getByTestId("AddIcon")).toBeInTheDocument();
  });
});
