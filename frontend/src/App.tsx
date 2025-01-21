import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import Layout1 from "./components/Layout1/Layout1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentByIdReport from "./components/StudentByIdReport/StudentByIdReport";
import GradedCategoriesSummary from "./components/GradedCategoriesSummary/GradedCategoriesSummary";
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
      <BrowserRouter>
        <Routes>
          <Route path="/teachers/:studentId" element={<StudentByIdReport />} />
          <Route
            path="/graded-categories-summary"
            element={<GradedCategoriesSummary />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
