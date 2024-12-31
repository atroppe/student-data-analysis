import {
  PaletteOptions,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReportForTeacher from "./student-data-components/report-for-teacher/report-for-teacher";
import ReportForStudent from "./student-data-components/report-for-parent/report-for-parent";
import Link from "@mui/material/Link";

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
        <ul>
          <li>
            <Link href="/teachers" color="inherit">
              For Teachers
            </Link>
          </li>
          <li>
            <Link href="/teachers/1" color="inherit">
              For Teachers: student by ID
            </Link>
          </li>
          <li>
            <Link href="/parents" color="inherit">
              For Parents
            </Link>
          </li>
        </ul>

        <BrowserRouter>
          <Routes>
            <Route path="/teachers" element={<ReportForTeacher />} />
            <Route path="/teachers/:studentId" element={<ReportForTeacher />} />
            <Route path="/parents" element={<ReportForStudent />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
