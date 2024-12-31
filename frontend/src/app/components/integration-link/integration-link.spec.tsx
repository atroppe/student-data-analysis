import { render, screen, fireEvent } from "@testing-library/react";
import IntegrationLink from "./integration-link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@testing-library/jest-dom";

describe("IntegrationLink component", () => {
  const theme = createTheme();

  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  const mockOption = {
    text: "Asana Ticket",
    img: "src/assets/icons/Asana-32.png",
  };

  it("renders correctly with provided option", () => {
    renderWithTheme(<IntegrationLink option={mockOption} />);

    const image = screen.getByAltText(mockOption.text);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockOption.img);

    const text = screen.getByText("DSN-556 Design Spec");
    expect(text).toBeInTheDocument();
  });

  it("applies hover styles", async () => {
    renderWithTheme(<IntegrationLink option={mockOption} />);

    const button = screen
      .getByTestId("integration-link")
      .querySelector("button");

    if (button) {
      fireEvent.mouseEnter(button);
      expect(button).toBeInTheDocument();
      // todo: check for hover styles
      fireEvent.mouseLeave(button);
      // todo: check for default styles
      fireEvent.mouseDown(button);
      expect(button).toBeInTheDocument();
      // todo: check for active styles
    }
  });
});
