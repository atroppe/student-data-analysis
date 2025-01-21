import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C3E50", // Midnight Blue
      contrastText: "#FFFFFF", // Light Text
    },
    secondary: {
      main: "#3498DB", // Bright Sky Blue
      contrastText: "#FFFFFF", // Light Text
    },
    background: {
      default: "#F7F9FB", // Light Grey
      paper: "#ECF0F1", // Muted Silver
    },
    text: {
      primary: "#2C3E50", // Dark Text
      secondary: "#3498DB", // Links or callouts
    },
    success: {
      main: "#27AE60", // Emerald Green
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#E67E22", // Carrot Orange
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#E74C3C", // Carmine Red
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#8E44AD", // Deep Amethyst
      contrastText: "#FFFFFF",
    },
    divider: "#BDC3C7", // Light Grey for borders
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#2C3E50",
    },
    body1: {
      fontSize: "1rem",
      color: "#2C3E50",
    },
  },
});

export default theme;
