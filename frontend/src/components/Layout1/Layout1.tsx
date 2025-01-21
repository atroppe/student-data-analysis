import React, { FC } from "react";
import { Layout1Wrapper } from "./Layout1.styled";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";

interface Layout1Props {}

const Layout1: FC<Layout1Props> = () => (
  <Layout1Wrapper data-testid="Layout1">
    <Container maxWidth="lg">
      {/* Page Title */}
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Student Data Analysis
        </Typography>
      </Box>

      {/* Grid Layout */}
      <Grid container spacing={3}>
        {/* Sidebar (if needed) */}
        <Grid item xs={12} md={3}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6">Filters</Typography>
            <Typography variant="body2">Filter options can go here.</Typography>
          </Paper>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Paper elevation={3} sx={{ height: 600, p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Data Overview
            </Typography>
            {/* <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              loading={loading}
              disableSelectionOnClick
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  outline: "none",
                },
              }}
            /> */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Layout1Wrapper>
);

export default Layout1;

// import React, { useEffect, useState } from 'react';
// import { Box, Container, Grid, Typography, Paper } from '@mui/material';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';

// const columns: GridColDef[] = [
//   { field: 'Student_ID', headerName: 'ID', width: 90 },
//   { field: 'Basic_Arithmetic', headerName: 'Arithmetic', width: 150 },
//   { field: 'Geometry_Understanding', headerName: 'Geometry', width: 150 },
//   { field: 'Word_Problems', headerName: 'Word Problems', width: 150 },
//   { field: 'Advanced_Math_Concepts', headerName: 'Advanced Math', width: 150 },
// ];

// const App: React.FC = () => {
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:5001/api/data')
//       .then((response) => response.json())
//       .then((data) => {
//         const formattedRows = data.map((row: any) => ({
//           ...row,
//           id: row.Student_ID, // Ensure each row has a unique ID
//         }));
//         setRows(formattedRows);
//         setLoading(false);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <Container maxWidth="lg">
//       {/* Page Title */}
//       <Box sx={{ my: 4, textAlign: 'center' }}>
//         <Typography variant="h3" component="h1" gutterBottom>
//           Student Data Analysis
//         </Typography>
//       </Box>

//       {/* Grid Layout */}
//       <Grid container spacing={3}>
//         {/* Sidebar (if needed) */}
//         <Grid item xs={12} md={3}>
//           <Paper elevation={3} sx={{ p: 2 }}>
//             <Typography variant="h6">Filters</Typography>
//             <Typography variant="body2">Filter options can go here.</Typography>
//           </Paper>
//         </Grid>

//         {/* Main Content */}
//         <Grid item xs={12} md={9}>
//           <Paper elevation={3} sx={{ height: 600, p: 2 }}>
//             <Typography variant="h6" gutterBottom>
//               Data Overview
//             </Typography>
//             <DataGrid
//               rows={rows}
//               columns={columns}
//               pageSize={5}
//               loading={loading}
//               disableSelectionOnClick
//               sx={{
//                 '& .MuiDataGrid-root': {
//                   border: 'none',
//                 },
//                 '& .MuiDataGrid-cell': {
//                   outline: 'none',
//                 },
//               }}
//             />
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default App;
