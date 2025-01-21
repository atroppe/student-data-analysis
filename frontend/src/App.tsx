import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import Layout1 from "./components/Layout1/Layout1";

const App: React.FC = () => {
  return (
    <div>
      {/* <h1>Student Data</h1> */}
      <Layout1 />
      <DataTable />
    </div>
  );
};

export default App;
