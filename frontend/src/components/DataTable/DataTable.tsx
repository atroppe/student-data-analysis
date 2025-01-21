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
    { field: "Student_ID", headerName: "Student ID", width: 50 },
    { field: "Age", headerName: "Age", width: 50 },
    {
      field: "Grade_Level",
      headerName: "Grade_Level",
      width: 50,
    },
    {
      field: "Gender",
      headerName: "Gender",
      width: 100,
    },
    { field: "Attendance_Rate", headerName: "Attendance_Rate", width: 100 },
    {
      field: "Learning_Style",
      headerName: "Learning_Style",
      width: 100,
    },
    {
      field: "Access_to_Technology",
      headerName: "Access_to_Technology",
      width: 50,
    },
    {
      field: "Study_Hours_Per_Week",
      headerName: "Study_Hours_Per_Week",
      width: 50,
    },
    {
      field: "Stress_Level",
      headerName: "Stress_Level",
      width: 50,
    },
    {
      field: "Advanced_Math_Concepts",
      headerName: "Advanced_Math_Concepts",
      width: 100,
    },
    { field: "Basic_Arithmetic", headerName: "Basic_Arithmetic", width: 100 },
    {
      field: "Communication_Skills",
      headerName: "Communication_Skills",
      width: 100,
    },
    {
      field: "Emotional_Recognition",
      headerName: "Emotional_Recognition",
      width: 100,
    },
    {
      field: "Consistent_Assignment_Completion",
      headerName: "Consistent_Assignment_Completion",
      width: 100,
    },
    {
      field: "Extracurricular_Participation",
      headerName: "Extracurricular_Participation",
      width: 50,
    },
    {
      field: "Focus_Levels",
      headerName: "Focus_Levels",
      width: 100,
    },
    {
      field: "Frequent_Interruptions",
      headerName: "Frequent_Interruptions",
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
    <div style={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.Student_ID}
      />
    </div>
  );
};

export default DataTable;
