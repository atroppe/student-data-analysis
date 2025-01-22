import React, { FC } from "react";
import { HomeWrapper } from "./Home.styled";
import DataTable from "../DataTable/DataTable";

interface HomeProps {}

const Home: FC<HomeProps> = () => <DataTable />;

export default Home;
