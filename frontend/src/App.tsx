import React, { useEffect, useState } from "react";
import DataTable from "./components/DataTable/DataTable";
import Layout1 from "./components/Layout1/Layout1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentByIdReport from "./components/StudentByIdReport/StudentByIdReport";
import GradedCategoriesSummary from "./components/GradedCategoriesSummary/GradedCategoriesSummary";
import { Link } from "@mui/material";
import Home from "./components/Home/Home";

const App: React.FC = () => {
  return (
    <div>
      <Layout1
        heading="All Student Data"
        header={<h1>Student Data Analysis</h1>}
        sidebar={
          <nav>
            <ul>
              <li>
                <Link href="/teachers/1">Student by ID</Link>
              </li>
              <li>
                <Link href="graded-categories-summary">
                  Graded Categories Summary
                </Link>
              </li>
            </ul>
          </nav>
        }
        footer={<p>&copy; 2025 Student Data Analysis</p>}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/teachers/:studentId"
              element={<StudentByIdReport />}
            />
            <Route
              path="/graded-categories-summary"
              element={<GradedCategoriesSummary />}
            />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </Layout1>
    </div>
  );
};

export default App;
