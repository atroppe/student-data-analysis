import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const DataTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/csv/process")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data);

        setRows(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: "Student_ID", headerName: "Student ID", width: 100 },
    { field: "Age", headerName: "Age", width: 100 },
    {
      field: "Grade_Level",
      headerName: "Grade Level",
      width: 100,
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: 100,
    },
    { field: "Attendance_Rate", headerName: "Attendance Rate", width: 100 },
    {
      field: "Learning_Style",
      headerName: "Learning Style",
      width: 100,
    },
    {
      field: "Access_to_Technology",
      headerName: "Access to Technology",
      width: 100,
    },
    {
      field: "Study_Hours_Per_Week",
      headerName: "Study Hours Per Week",
      width: 100,
    },
    {
      field: "Stress_Level",
      headerName: "Stress Level",
      width: 100,
    },
    {
      field: "Advanced_Math_Concepts",
      headerName: "Advanced Math Concepts",
      width: 100,
    },
    { field: "Basic_Arithmetic", headerName: "Basic Arithmetic", width: 100 },
    {
      field: "Communication_Skills",
      headerName: "Communication Skills",
      width: 100,
    },
    {
      field: "Emotional_Recognition",
      headerName: "Emotional Recognition",
      width: 100,
    },
    {
      field: "Consistent_Assignment_Completion",
      headerName: "Consistent Assignment Completion",
      width: 100,
    },
    {
      field: "Extracurricular_Participation",
      headerName: "Extracurricular Participation",
      width: 100,
    },
    {
      field: "Focus_Levels",
      headerName: "Focus Levels",
      width: 100,
    },
    {
      field: "Frequent_Interruptions",
      headerName: "Frequent Interruptions",
      width: 100,
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ height: "90%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.Student_ID}
        loading={loading}
      />
    </div>
  );
};

export default DataTable;
