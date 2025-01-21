import React, { FC } from "react";
import { Footer, Header, Layout1Wrapper } from "./Layout1.styled";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  useTheme,
} from "@mui/material";

interface Layout1Props {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  main: React.ReactNode;
  footer?: React.ReactNode;
  heading: string;
}

const Layout1: FC<Layout1Props> = ({
  header,
  sidebar,
  main,
  footer,
  heading,
}) => {
  const theme = useTheme();
  return (
    <Layout1Wrapper data-testid="Layout1">
      {header && <Header theme={theme}>{header}</Header>}
      <Container maxWidth="lg">
        {/* Page Title */}
        <Box sx={{ my: 4, textAlign: "center" }}>
          <Typography variant="h3" component="h1" gutterBottom>
            {heading}
          </Typography>
        </Box>

        {/* Grid Layout */}
        <Grid container spacing={3}>
          {/* Sidebar (if needed) */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6">Reports</Typography>
              {sidebar}
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Paper elevation={3} sx={{ height: 700, p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Data Overview
              </Typography>
              {main}
            </Paper>
          </Grid>
        </Grid>
      </Container>
      {footer && <Footer theme={theme}>{footer}</Footer>}
    </Layout1Wrapper>
  );
};

export default Layout1;
