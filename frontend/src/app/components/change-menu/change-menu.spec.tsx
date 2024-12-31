import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ChangeMenu } from "./change-menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@testing-library/jest-dom";

describe("ChangeMenu component", () => {
  const theme = createTheme();

  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it("renders the menu button and opens the menu on click", () => {
    renderWithTheme(<ChangeMenu />);

    const button = screen.getByRole("button", { name: /more/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    const changeOption = screen.getByText(/change url/i);
    const deleteOption = screen.getByText(/delete integration/i);

    expect(changeOption).toBeInTheDocument();
    expect(deleteOption).toBeInTheDocument();
  });

  it("closes the menu when an option is clicked", async () => {
    renderWithTheme(<ChangeMenu />);

    const button = screen.getByRole("button", { name: /more/i });
    fireEvent.click(button);

    const changeOption = screen.getByText(/change url/i);
    expect(changeOption).toBeInTheDocument();

    fireEvent.click(changeOption);

    await waitFor(() => {
      expect(changeOption).not.toBeInTheDocument();
    });
  });
});
