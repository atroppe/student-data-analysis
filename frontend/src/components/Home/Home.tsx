import React, { FC } from "react";
import { HomeWrapper } from "./Home.styled";
import DataTable from "../DataTable/DataTable";
import { Typography } from "@mui/material";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Student Data Overview
      </Typography>
      <DataTable />
    </div>
  );
};

export default Home;
