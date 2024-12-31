import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import IntegrationInput from "./integration-input";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@testing-library/jest-dom";

describe("IntegrationInput component", () => {
  const theme = createTheme();

  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  it("renders the IntegrationInput component", () => {
    renderWithTheme(<IntegrationInput />);

    const heading = screen.getByText(/integrations/i);
    expect(heading).toBeInTheDocument();
  });

  it("displays integration options when the menu button is clicked", () => {
    renderWithTheme(<IntegrationInput />);

    const menuButton = screen.getByRole("button", {
      name: /integration menu/i,
    });
    fireEvent.click(menuButton);

    const asanaOption = screen.getByText(/Asana ticket/i);
    expect(asanaOption).toBeInTheDocument();

    const figmaOption = screen.getByText(/Figma file/i);
    expect(figmaOption).toBeInTheDocument();
  });

  it("adds a child when a link is clicked", async () => {
    renderWithTheme(<IntegrationInput />);

    const menuButton = screen.getByRole("button", {
      name: /integration menu/i,
    });
    fireEvent.click(menuButton);

    const asanaOption = screen.getByText(/Asana ticket/i);
    fireEvent.click(asanaOption);

    const linkInputButton = screen.getByRole("button", { name: /link input/i });

    fireEvent.click(linkInputButton);

    await waitFor(() => {
      const chip = screen.getByText(/in progress/i);
      expect(chip).toBeInTheDocument();
    });
  });

  it("shows ChangeMenu on mouse over and hides on mouse leave", async () => {
    renderWithTheme(<IntegrationInput />);

    const menuButton = screen.getByRole("button", {
      name: /integration menu/i,
    });
    fireEvent.click(menuButton);

    const asanaOption = screen.getByText(/Asana ticket/i);
    fireEvent.click(asanaOption);

    const linkButton = await waitFor(() =>
      screen.getByRole("button", {
        name: /link input/i,
      })
    );
    fireEvent.click(linkButton);

    const integrationLink = screen.getByTestId("integration-link");
    fireEvent.mouseEnter(integrationLink);

    const changeMenu = await waitFor(() => screen.getByTestId("change-menu"));
    expect(changeMenu).toBeInTheDocument();

    fireEvent.mouseLeave(integrationLink);

    await waitFor(() => {
      expect(changeMenu).not.toBeInTheDocument();
    });
  });
});
