import {
  PaletteOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import IntegrationInput from "./components/integration-input/integration-input";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    button: {
      textTransform: "none",
      fontSize: "12px",
    },
  },
  palette: {
    primary: {
      light: "#F3F2F5",
      main: "#CFD8E5",
      dark: "#C0CAD7",
      contrastText: "#344765",
    },
    secondary: {
      main: "#CEE7FE",
      dark: "#99CEF0",
      contrastText: "#2E5FE8",
    },
    success: {
      main: "#DCFAEC",
      contrastText: "#0B752E",
    },
    error: {
      main: "#FFEFEF",
      light: "#FFEFEF",
      contrastText: "#CC1010",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    text: {
      primary: "#242C39",
      disabled: "#A6B3C7",
      secondary: "#617798",
    },
    background: {
      default: "#F2F2F2",
    },
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box component="section" sx={{ m: 2, p: 2, border: "1px dashed grey" }}>
        <IntegrationInput />
      </Box>
    </ThemeProvider>
  );
}

export default App;
