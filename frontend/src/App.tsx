import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import Layout1 from "./components/Layout1/Layout1";

const App: React.FC = () => {
  return (
    <div>
      <Layout1 heading="All Student Data">
        <DataTable />
      </Layout1>
    </div>
  );
};

export default App;
