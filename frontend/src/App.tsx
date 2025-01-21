import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import Layout1 from "./components/Layout1/Layout1";

const App: React.FC = () => {
  return (
    <div>
      <Layout1
        heading="All Student Data"
        header={<h1>Student Data Analysis</h1>}
        sidebar={
          <nav>
            <ul>
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
            </ul>
          </nav>
        }
        main={<DataTable />}
        footer={<p>&copy; 2025 Student Data Analysis</p>}
      ></Layout1>
    </div>
  );
};

export default App;
