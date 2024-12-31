import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LinkInput from "./link-input";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@testing-library/jest-dom";

describe("LinkInput component", () => {
  const theme = createTheme();

  const renderWithTheme = (ui: JSX.Element) => {
    return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  const mockText = "My Link Input";
  const mockImg = "src/assets/icons/Link-24.png";

  it("renders correctly with provided text and image", () => {
    renderWithTheme(<LinkInput text={mockText} img={mockImg} />);

    const image = screen.getByAltText(mockText);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockImg);

    const icon = screen.getByTestId("MoreHorizIcon");
    expect(icon).toBeInTheDocument();
  });

  it("displays tooltip with input field", async () => {
    renderWithTheme(<LinkInput text={mockText} img={mockImg} />);

    const icon = screen.getByTestId("MoreHorizIcon");
    fireEvent.mouseOver(icon);

    const tooltipText = await screen.findByText(mockText);
    expect(tooltipText).toBeInTheDocument();

    const inputField = screen.getByPlaceholderText(/paste link https:\/\/.../i);
    expect(inputField).toBeInTheDocument();
  });

  it("validates input correctly", async () => {
    renderWithTheme(<LinkInput text={mockText} img={mockImg} />);

    const icon = screen.getByTestId("MoreHorizIcon");
    fireEvent.mouseOver(icon);

    const inputField = screen.getByPlaceholderText(/paste link https:\/\/.../i);

    fireEvent.change(inputField, { target: { value: "123" } });
    fireEvent.blur(inputField);

    await waitFor(() => {
      expect(inputField).toHaveAttribute("aria-invalid", "true"); // Assuming validation sets this attribute
    });

    fireEvent.change(inputField, { target: { value: "https://example.com" } });
    fireEvent.blur(inputField);

    await waitFor(() => {
      expect(inputField).toHaveAttribute("aria-invalid", "false"); // Assuming validation sets this attribute
    });
  });

  it("disables button when input is invalid", async () => {
    const mockOnClickLink = vi.fn();
    renderWithTheme(
      <LinkInput text={mockText} img={mockImg} onClickLink={mockOnClickLink} />
    );

    const icon = screen.getByTestId("MoreHorizIcon");
    fireEvent.mouseOver(icon);

    const inputField = screen.getByPlaceholderText(/paste link https:\/\/.../i);

    fireEvent.change(inputField, { target: { value: "123" } });
    fireEvent.blur(inputField);

    const linkButton = screen.getByTestId("Link Input");
    expect(linkButton).toBeDisabled();

    fireEvent.change(inputField, { target: { value: "https://example.com" } });
    fireEvent.blur(inputField);

    expect(linkButton).toBeEnabled();
  });

  it("calls onClickLink when button is clicked", async () => {
    const mockOnClickLink = vi.fn();
    renderWithTheme(
      <LinkInput text={mockText} img={mockImg} onClickLink={mockOnClickLink} />
    );

    const icon = screen.getByTestId("MoreHorizIcon");
    fireEvent.mouseOver(icon);

    const inputField = screen.getByPlaceholderText(/paste link https:\/\/.../i);
    fireEvent.change(inputField, { target: { value: "https://example.com" } });
    fireEvent.blur(inputField);

    const linkButton = screen.getByTestId("Link Input");
    fireEvent.click(linkButton);

    expect(mockOnClickLink).toHaveBeenCalled();
  });
});
